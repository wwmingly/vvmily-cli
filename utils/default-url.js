//npm模块
const chalk = require("chalk"); //打印改变颜色
const shell = require("shelljs"); //使用shell
const defaultUrlList = require("../config"); // 配置公共模板

const defaultUrl = () => {
    return new Promise(async (resolve, reject) => {
        const configUrl = shell.exec('npm config get vvmily-url').match(/{(.+?)}/g)//先切换成数组
        if (configUrl) {
            console.log(chalk.green('找到配置文件，用配置的模板列表'));
            try {
                const url = formatting(configUrl)
                resolve(url)
            } catch (error) {
                console.log(chalk.red('改用默认列表，格式化配置文件失败：' + error.message));
                resolve(defaultUrlList)
            }
        } else {
            console.log(chalk.yellow('找到不到配置文件，用默认的模板列表'));
            resolve(defaultUrlList)
        }
    })
}

const formatting = (urlObj) => {
    if (urlObj && urlObj.length > 0) {
        const urlArr = urlObj.map((item) => {
            const splitObj = item.replace('}', ',') //先将花括号换成，号方便后期切割
            return {
                key: splitObj.match(/key:(.+?),/)[1],
                name: splitObj.match(/name:(.+?),/)[1],
                value: splitObj.match(/value:(.+?),/)[1]
            }
        })
        return urlArr
    } else {
        throw new Error('空数组')
    }
}

module.exports = defaultUrl
@js:
  function init_JunanPluin() {
    let sel_title = ['道长仓库', '青豆', '道APP', '断插', '更新本体'].map((it) => {
      if (it === '道长仓库') {
        return '👁️‍🗨️' + it;
      } else if (it === '青豆') {
        return '️🌇' + it;
      } else if (it === '道APP') {
        return '🌄' + it;
      } else if (it === '断插') {
        return '🏡' + it;
      } else {
        return '🔄' + it;
      }
    });

    return $(sel_title, 2).select(() => {
      function compare(name) {
        return function(it) {
          return it === name;
        }
      }

      if (/道长仓库/.test(input)) {
        //直连模式
        // return 'hiker://home@MyFieldᴰⁿ'
        //遍历模式
        let home = base64Decode("aGlrZXI6Ly9ob21l");
        let ruleList = JSON.parse(request(home));
        let appName = '道长仓库Pro';
        let hasRule = ruleList.some(item => item.title === appName);
        if (
          !hasRule) {
          return 'toast://找不到本地叫做' + appName + '的小程序';
        }
        let ruleJson = ruleList.filter(item => item.title === appName)[0];
        return $("hiker://empty#noHistory#").rule((ruleJson) => {
          //日志输出
          // log(ruleJson.find_rule);
          eval(ruleJson.find_rule);
        }, ruleJson)

      } else if (/青豆/.test(input)) {
        //直连模式
        // return 'hiker://home@MyFieldᴰⁿ'
        //遍历模式
        let home = base64Decode("aGlrZXI6Ly9ob21l");
        let ruleList = JSON.parse(request(home));
        let appName = '青豆';
        let hasRule = ruleList.some(item => item.title === appName);
        if (
          !hasRule) {
          return 'toast://找不到本地叫做' + appName + '的小程序';
        }
        let ruleJson = ruleList.filter(item => item.title === appName)[0];
        return $("hiker://empty#noHistory#").rule((ruleJson) => {
          //日志输出
          // log(ruleJson.find_rule);
          eval(ruleJson.find_rule);
        }, ruleJson)

      } else if (/道APP/.test(input)) {
        //直连模式
        // return 'hiker://home@MyFieldᴰⁿ'
        //遍历模式
        let home = base64Decode("aGlrZXI6Ly9ob21l");
        let ruleList = JSON.parse(request(home));
        let appName = 'app影视.dp';
        let hasRule = ruleList.some(item => item.title === appName);
        if (
          !hasRule) {
          return 'toast://找不到本地叫做' + appName + '的小程序';
        }
        let ruleJson = ruleList.filter(item => item.title === appName)[0];
        return $("hiker://empty#noHistory#").rule((ruleJson) => {
          //日志输出
          // log(ruleJson.find_rule);
          eval(ruleJson.find_rule);
        }, ruleJson)
        
      } else if (/断插/.test(input)) {
        //直连模式
        // return 'hiker://home@MyFieldᴰⁿ'
        //遍历模式
        let home = base64Decode("aGlrZXI6Ly9ob21l");
        let ruleList = JSON.parse(request(home));
        let appName = 'MyFieldᴰⁿ';
        let hasRule = ruleList.some(item => item.title === appName);
        if (
          !hasRule) {
          return 'toast://找不到本地叫做' + appName + '的小程序';
        }
        let ruleJson = ruleList.filter(item => item.title === appName)[0];
        return $("hiker://empty#noHistory#").rule((ruleJson) => {
          //日志输出
          // log(ruleJson.find_rule);
          eval(ruleJson.find_rule);
        }, ruleJson)
        
      } else if (/更新/.test(input)) {
        return $('确定更新元素吗?').confirm(() => {

          //更新本体
          //let local_js = 'hiker://files/rules/Junan/js/Menu_Theme_Fixed.js';
          //let online_js= 'http://hiker.nokia.press/hikerule/rulelist.json?id=2143&auth=9687d210-730c-5d83-af05-773f5ab00df6';
          //writeFile(local_js, fetch(online_js));
          
          refreshPage(true);
          return 'toast://已更新'
        })
        
      } else {
        //防报错处理
        return 'toast://点了个寂寞😎'
      }
    })
  }
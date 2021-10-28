@js:
  function init_duanPluin() {
    let sel_title = ['多功能H5', '影视海报', '图片一言', '程序主页', '重写更新'].map((it) => {
      if (it === '多功能H5') {
        return '👁️‍🗨️' + it;
      } else if (it === '影视海报') {
        return '️🌇' + it;
      } else if (it === '图片一言') {
        return '🌄' + it;
      } else if (it === '程序主页') {
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
      if (/多功能H5/.test(input)) {
        let local = "hiker://files/cache/junan/control_h5";
        var jn = fetch(local);
        if (!jn || jn == 'OFF') {
          writeFile(local, 'dz');
        } else if (jn == 'dz') {
          writeFile(local, 'ty');
        } else {
          writeFile(local, 'OFF');
        };
        refreshPage(false);
        return 'toast://已切换'

      } else if (/影视海报/.test(input)) {
        let local = "hiker://files/cache/junan/control_yshb";
        var jn=fetch(local);
        if(! jn||jn=='OFF'){
          writeFile(local,'ON')
        } else {
          writeFile(local,'OFF')
        };
        refreshPage(false);
        return 'toast://已切换'
      } else if (/图片一言/.test(input)) {
        
        
        refreshPage(false);
        return 'toast://已切换';
        
      } else if (/更新/.test(input)) {
        return $('确定更新主题元素吗?').confirm(() => {


          
          // 更新本体
          //let base_search_js = 'hiker://files/rules/Junan/js/List_S.js';
          //writeFile(base_search_js, fetch('http://hiker.nokia.press/hikerule/rulelist.json?id=2042&auth=f7a1db09-73fa-5422-9a42-2326b515f9f7'));
          
          refreshPage(true);
          return 'toast://已更新'
        })
        
      } else if (/程序主页/.test(input)) {
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
          // log(ruleJson.find_rule);
          eval(ruleJson.find_rule);
        }, ruleJson)
        // return 'hiker://home@MyFieldᴰⁿ'
      } else {
        // return 'hiker://home@MyFieldᴰⁿ'
        return $("hiker://empty#noHistory#").rule(() => {
          // let d = [];
          // d.push({
          //     col_type:'text_1',
          //     title:'打开断插主页新窗口',
          //     url:'hiker://home@MyFieldᴰⁿ',
          //     extra:{newWindow: true}
          // });
          // setResult(d);
          this.d = [];
          $.require("hiker://page/jxItem?rule=MyFieldᴰⁿ").jxList();
          setResult(d);
        })
      }
    })
  }
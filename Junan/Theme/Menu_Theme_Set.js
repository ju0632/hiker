@js:
  function init_JunanPluin() {
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
      } else if (/重写更新/.test(input)) {
        return $('确定更新主题元素吗?').confirm(() => {
          //预安装初始化①྄🍧🎐
          function init() {
            //开关控制文件
            const local_up_state = 'hiker://files/cache/junan/control_up_state';
            //超时毫秒
            let time_out='500';
            //获取处理更新开关
            var jn = fetch(local_up_state);
            if (!jn || jn == '1') {
              var up_state = '1';
            } else {
              var up_state = '1';
            };
          
            //预安装影视海报
            function init_setup_yshb() {
              let time_out='500';
              let local='hiker://files/cache/Slider3.html';
              let online='https://qn.res.to51.cn/hiker/theme/Slider3.html';
              up_state || !fileExist(local) ? (writeFile(local, request(online))) : 0;
            };
            init_setup_yshb();
            
            //多功能H5插件
            function init_setup_h5() { 
              //https://erp.scwinbao.com/hikerule/rulelist.json?id=1248
              //let up_state=0;//设为1每次都重新下载到本地
              let time_out='500';
              let local='hiker://files/rules/dzHouse/html/多功能h5插件.html';
              let online='http://hiker.nokia.press/hikerule/rulelist.json?id=1248';
              up_state || !fileExist(local) ? (writeFile(local, request(online))) : 0;
            };
            init_setup_h5();

            //主页时钟天气
            function init_html_tss() {
              //let up_state=0;//设为1每次都重新下载到本地
              let time_out='500';
              let local_html = 'hiker://files/rules/dzHouse/html/主页时钟天气.html';
              let online_html = 'http://hiker.nokia.press/hikerule/rulelist.json?id=467';
              if (up_state || !request(local_html)) {
                writeFile(local_html,request(online_html,{timeout:time_out}));
              };
            };
            init_html_tss();
            
            //重新标记更新开关
            writeFile(local_up_state,'0');
          };
          init();

          //更新本体
          //let local_js = 'hiker://files/rules/Junan/js/Menu_Theme_Set.js';
          //let online_js= 'http://hiker.nokia.press/hikerule/rulelist.json?id=2140&auth=9ffffa3d-07ba-566b-9127-7ea7eb81cd2a';
          //writeFile(local_js, fetch(online_js));
          
          refreshPage(true);
          return 'toast://已更新'
        })
        
      } else {
        //防报错处理
        return 'toast://😎'
      }
    })
  }
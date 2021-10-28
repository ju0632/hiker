          //预安装初始化①྄🍧🎐
          function init() {
            const local_up_state = "hiker://files/cache/junan/control_up_state";
            var jn = fetch(local_up_state);
            if (!jn || jn == '1') {
              var up = 1;
            } else {
              var up = 0;
            };

            //预安装影视海报
            function init_setup_yshb() {
              !fileExist('hiker://files/cache/Slider3.html') ? (writeFile('hiker://files/cache/Slider3.html', request('https://qn.res.to51.cn/hiker/theme/Slider3.html'))) : 0;
            };
            init_setup_yshb();
            
            //多功能H5插件
            function init_setup_h5() { 
              //https://erp.scwinbao.com/hikerule/rulelist.json?id=1248
              //let up=0;//设为1每次都重新下载到本地
              let time_out=500;
              up || !fileExist('hiker://files/rules/dzHouse/html/多功能h5插件.html') ? (writeFile('hiker://files/rules/dzHouse/html/多功能h5插件.html', request('http://hiker.nokia.press/hikerule/rulelist.json?id=1248'))) : 0;
            };
            init_setup_h5();

            //主页时钟天气
            function init_html_tss() {
              //let up=0;//设为1每次都重新下载到本地
              let time_out=500;
              let local_html = "hiker://files/rules/dzHouse/html/主页时钟天气.html";
              let online_html = "http://hiker.nokia.press/hikerule/rulelist.json?id=467";
              if (up || !request(local_html)) {
                writeFile(local_html,request(online_html,{timeout: time_out}));
              };
            };
            init_html_tss();
            
            //重新标记开关
            writeFile(local_up_state,'0');
          };
          init();

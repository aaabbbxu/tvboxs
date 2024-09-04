var rule = {
    title:'我的哔哩',
    host:'https://api.bilibili.com',
    homeUrl:'/x/web-interface/ranking/v2?rid=0&type=origin', // 排行 > 排行榜 > 原创
    url:'/x/web-interface/search/type?search_type=videofyfilter',
    class_name:'知名UP主&演讲&平面设计教学&软件教程&实用教程',
    class_url:'知名UP主&演讲&平面设计教学&软件教程&实用教程',
    filterable: 1,
    filter_url: '&keyword={{fl.tid}}&page=fypage&duration={{fl.duration}}&order={{fl.order}}',
    filter_def:{
       
        知名UP主:{tid:'知名UP主'},      
        演讲:{tid:'演讲'},
        平面设计教学:{tid:'平面设计教学'},
        软件教程:{tid:'软件教程'},
        实用教程:{tid:'实用教程'}
    },
    filter: {
       
        "实用教程":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"实用教程"},{"n":"水电维修","v":"水电维修"},{"n":"装修","v":"装修"},{"n":"生活小技巧","v":"生活小技巧"},{"n":"绿植","v":"绿植"},{"n":"宠物","v":"宠物"},{"n":"汽车","v":"汽车养护"},{"n":"穿衣搭配","v":"穿衣搭配"},{"n":"毛衣编织","v":"毛衣编织"},{"n":"美妆","v":"美妆"},{"n":"数独","v":"数独教程"},{"n":"魔方","v":"魔方教程"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "演讲":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"全部演讲4K"},{"n":"A艾跃进","v":"艾跃进演讲4K"},{"n":"C超级演说家","v":"超级演说家4K"},{"n":"D电影","v":"电影演讲4K"},{"n":"D典籍里的中国","v":"典籍里的中国4K"},{"n":"G感动中国","v":"感动中国4K"},{"n":"G郭继承","v":"郭继承演讲4K"},{"n":"L雷军","v":"雷军演讲4K"},{"n":"L罗翔","v":"罗翔演讲4K"},{"n":"R任正非","v":"任正非演讲4K"},{"n":"TED","v":"TED演讲4K"},{"n":"W汪文斌","v":"汪文斌演讲4K"},{"n":"Y一刻","v":"一刻演讲4K"},{"n":"Z郑强","v":"郑强演讲4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
 
        "知名UP主":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"知名UP主"},{"n":"黑马程序员","v":"黑马程序员"},{"n":"海南弱电小胡","v":"海南弱电小胡"},{"n":"城阳电工电路","v":"城阳电工电路"},{"n":"消防工程师阿杜","v":"消防工程师阿杜"},{"n":"米师傅安装","v":"米师傅安装"},{"n":"众元-网工学姐","v":"众元-网工学姐"},{"n":"木鱼水心","v":"木鱼水心"},{"n":"华宇万维","v":"华宇万维"},{"n":"全民创客","v":"全民创客"},{"n":"众元网络","v":"众元网络"},{"n":"老番茄","v":"老番茄"},{"n":"80小陈","v":"80小陈"},{"n":"自说自话的总裁","v":"自说自话的总裁"},{"n":"所长林超","v":"所长林超"},{"n":"世界未解之谜M","v":"世界未解之谜M"},{"n":"众元网络","v":"众元网络"},{"n":"哔哩哔哩电影","v":"哔哩哔哩电影"},{"n":"回到2049","v":"回到2049"},{"n":"二次元的中科院物理所","v":"二次元的中科院物理所"},{"n":"毕导THU","v":"毕导THU"},{"n":"low馆长","v":"low馆长"},{"n":"戴博士实验室","v":"戴博士实验室"},{"n":"芳斯塔芙","v":"芳斯塔芙"},{"n":"参赛者网","v":"参赛者网"},{"n":"三维地图看世界","v":"三维地图看世界"},{"n":"有机社会","v":"有机社会"},{"n":"乌鸦校尉CaptainWuya","v":"乌鸦校尉CaptainWuya"},{"n":"果壳","v":"果壳"},{"n":"严伯钧","v":"严伯钧"},{"n":"是你们的康康","v":"是你们的康康"},{"n":"盗月社食遇记","v":"盗月社食遇记"},{"n":"我是郭杰瑞","v":"我是郭杰瑞"},{"n":"无穷小亮的科普日常","v":"无穷小亮的科普日常"},{"n":"敬汉卿","v":"敬汉卿"},{"n":"A阿阳热爱前端","v":"阿阳热爱前端"},{"n":"B哔哩哔哩纪录片","v":"哔哩哔哩纪录片"},{"n":"C程十安","v":"C程十安"},{"n":"D大门ZRR","v":"大门ZRR"},{"n":"D大象放映室","v":"大象放映室"},{"n":"D动画讲编程","v":"动画讲编程"},{"n":"D动物学博士陈睿","v":"动物学博士陈睿"},{"n":"E鹅姐职场","v":"鹅姐职场"},{"n":"F帆雨动画","v":"帆雨动画"},{"n":"H幻海航行","v":"幻海航行"},{"n":"H回到2049","v":"回到2049"},{"n":"H会放羊的教书匠","v":"会放羊的教书匠"},{"n":"J机械百宝箱","v":"机械百宝箱"},{"n":"J纪录片我去看世界","v":"纪录片我去看世界"},{"n":"J纪录片之家字幕组","v":"纪录片之家字幕组"},{"n":"K科普中国","v":"科普中国"},{"n":"K科学声音","v":"科学声音"},{"n":"L拉片实验室","v":"拉片实验室"},{"n":"L唠点历史","v":"唠点历史"},{"n":"L历史调研室","v":"历史调研室"},{"n":"L历史启示录","v":"历史启示录"},{"n":"S森纳映画","v":"森纳映画"},{"n":"S沙盘上的战争","v":"沙盘上的战争"},{"n":"S生命中国","v":"生命中国"},{"n":"S史图馆","v":"史图馆"},{"n":"S思想史万有引力","v":"思想史万有引力"},{"n":"Y有观点大历史","v":"有观点大历史"},{"n":"Z这知识好冷","v":"这知识好冷"},{"n":"Z中科院格致论道讲坛","v":"中科院格致论道讲坛"},{"n":"Z中医基础理论","v":"中医基础理论"},{"n":"Z周观鱼UP","v":"周观鱼UP"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "平面设计教学":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"平面设计教学"},{"n":"AdobePhotoshop","v":"AdobePhotoshop教程"},
  {"n":"CAD教程","v":"CAD教程"},
  {"n":"AdobeIllustrator","v":"AdobeIllustrator教程"},{"n":"CorelDRAW","v":"CorelDRAW教程"},{"n":"AdobeInDesign","v":"AdobeInDesign教程"},{"n":"AdobePagermaker","v":"AdobePagermaker教程"},{"n":"SAI","v":"SAI教程"},{"n":"AdobeBridge","v":"AdobeBridge教程"},{"n":"AdobePagermaker","v":"AdobePagermake教程r"},{"n":"3DStudioMax","v":"3DStudioMax教程"},{"n":"PR","v":"PR教程"},{"n":"AE","v":"AE教程"},{"n":"CINEMA4D","v":"CINEMA4D教程"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "软件教程":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"软件教程"},{"n":"MT管理器","v":"MT管理器"},{"n":"NP管理器","v":"NP管理器"},{"n":"mixplorer","v":"mixplorer"},{"n":"脱壳","v":"脱壳"},{"n":"爬虫","v":"爬虫"},{"n":"json&jar","v":"json&jar"},{"n":"office教程","v":"office教程"},{"n":"EXCEL","v":"EXCEL教程"},{"n":"Git入门到精通","v":"Git入门到精通"},{"n":"java","v":"java教程"},{"n":"phyton","v":"phyton教程"},{"n":"xml","v":"xml教程"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}]
    },
    detailUrl:'/x/web-interface/view/detail?aid=fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/x/web-interface/search/type?search_type=video&keyword=**&page=1',
    searchable:2,
    quickSearch:0,
    headers:{
        "User-Agent":"PC_UA",
        "Referer": "https://www.bilibili.com",
        // "Cookie":"$bili_cookie"
        "Cookie":"https://gitee.com/xuxiangfei1979/xuxiangfei/raw/master/cookies.txt"
    },
    timeout:5000,
    limit:8,
    play_parse:true,
    lazy:`js:
        let ids = input.split('_');
        let dan = 'https://api.bilibili.com/x/v1/dm/list.so?oid=' + ids[1];
        let result = {};
        let iurl = 'https://api.bilibili.com:443/x/player/playurl?avid=' + ids[0] + '&cid=' + ids[1] + '&qn=116';
        let html = request(iurl);
        let jRoot = JSON.parse(html);
        let jo = jRoot.data;
        let ja = jo.durl;
        let maxSize = -1;
        let position = -1;
        ja.forEach(function(tmpJo, i) {
            if (maxSize < Number(tmpJo.size)) {
                maxSize = Number(tmpJo.size);
                position = i
            }
        });
        let purl = '';
        if (ja.length > 0) {
            if (position === -1) {
                position = 0
            }
            purl = ja[position].url
        }
        result.parse = 0;
        result.playUrl = '';
        result.url = unescape(purl);
        result.header = {
            'Referer': 'https://live.bilibili.com',
            'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'
        };
        if (/\\.flv/.test(purl)) {
            result.contentType = 'video/x-flv';
        } else {
            result.contentType = '';
        }
        result.danmaku = dan;
        input = result
    `,
    double:false,
    // 推荐:'*',
    推荐:`js:
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = '';
            let sec = '';
            try {
                min = duration.split(':')[0];
                sec = duration.split(':')[1];
            } catch (e) {
                if (duration >= 3600) {
                    let rSAH = duration % 3600;
                    min = Math.floor(rSAH / 60);
                    sec = rSAH % 60;
                } else {
                    min = Math.floor(duration / 60);
                    sec = duration % 60;
                }
            }
            if (isNaN(parseInt(duration))) {
                return '无效输入';
            }
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        function ConvertNum(num) {
            let _ws = Math.pow(10, 1);
            let _b = 1e4;
            if (num < _b) {
                return num.toString();
            }
            let _r = '';
            let _strArg = ['', '万', '亿', '万亿'];
            let _i = Math.floor(Math.log(num) / Math.log(_b));
            if (_i > 3) {
                _i = 3;
            }
            _r = Math.floor(num / Math.pow(_b, _i) * _ws) / _ws + _strArg[_i];
            return _r;
        }
        let html = request(input);
        let vodList = JSON.parse(html).data.list;
        let videos = [];
        vodList.forEach(function(vod) {
            let aid = vod.aid;
            let title = stripHtmlTag(vod.title);
            let img = vod.pic;
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            let remark = turnDHM(vod.duration) + ' ▶' + ConvertNum(vod.stat.view) + ' 🆙' + vod.owner.name;
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
    // 一级:'js:let html=request(input);let msg=JSON.parse(html).message;function title_rep(title){if(/keyword/.test(title)){title=title.replace(\'<em class="keyword">\',"").replace("</em>","").replace("&quot;","\'");log("名称替换👉"+title)};return title}if(msg!=="0"){VODS=[{vod_name:KEY+"➢"+msg,vod_id:"no_data",vod_remarks:"别点,缺少bili_cookie",vod_pic:"https://ghproxy.net/https://raw.githubusercontent.com/hjdhnx/dr_py/main/404.jpg"}]}else{let videos=[];let vodList=JSON.parse(html).data.result;vodList.forEach(function(vod){let aid=vod["aid"];let title=vod["title"].trim();title=title_rep(title);title=title_rep(title);title=title_rep(title);title=title_rep(title);let img="https:"+vod["pic"];let remark=vod["duration"];videos.push({vod_id:aid,vod_name:title,vod_pic:img,vod_remarks:remark})});VODS=videos}',
    一级:`js:
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = '';
            let sec = '';
            try {
                min = duration.split(':')[0];
                sec = duration.split(':')[1];
            } catch (e) {
                if (duration >= 3600) {
                    let rSAH = duration % 3600;
                    min = Math.floor(rSAH / 60);
                    sec = rSAH % 60;
                } else {
                    min = Math.floor(duration / 60);
                    sec = duration % 60;
                }
            }
            if (isNaN(parseInt(duration))) {
                return '无效输入';
            }
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        function ConvertNum(num) {
            let _ws = Math.pow(10, 1);
            let _b = 1e4;
            if (num < _b) {
                return num.toString();
            }
            let _r = '';
            let _strArg = ['', '万', '亿', '万亿'];
            let _i = Math.floor(Math.log(num) / Math.log(_b));
            if (_i > 3) {
                _i = 3;
            }
            _r = Math.floor(num / Math.pow(_b, _i) * _ws) / _ws + _strArg[_i];
            return _r;
        }
        let data = [];
        let vodList = [];
        if (MY_CATE === '推荐') {
            input = HOST + '/x/web-interface/index/top/rcmd?ps=14&fresh_idx=' + MY_PAGE + '&fresh_idx_1h=' + MY_PAGE;
            data = JSON.parse(request(input)).data;
            vodList = data.item;
        } else {
            data = JSON.parse(request(input)).data;
            vodList = data.result;
        }
        let videos = [];
        vodList.forEach(function(vod) {
            let aid = vod.aid?vod.aid:vod.id;
            let title = stripHtmlTag(vod.title);
            let img = vod.pic;
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            let play = '';
            let danmaku = ''
            if (MY_CATE === '推荐') {
                play = ConvertNum(vod.stat.view);
                danmaku = vod.stat.danmaku;
            } else {
                play = ConvertNum(vod.play);
                danmaku = vod.video_review;
            }
            let remark = turnDHM(vod.duration) + ' ▶' + play + ' 💬' + danmaku;
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
    二级:`js:
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        let html = request(input);
        let jo = JSON.parse(html).data.View;
        let stat = jo.stat;
        let up_info = JSON.parse(html).data.Card;
        let relation = up_info.following ? '已关注' : '未关注';
        let aid = jo.aid;
        let title = stripHtmlTag(jo.title);
        let pic = jo.pic;
        let desc = jo.desc;

        let date = new Date(jo.pubdate * 1000);
        let yy = date.getFullYear().toString();
        let mm = date.getMonth()+1;
        mm = mm < 10 ? ('0' + mm) : mm;
        let dd = date.getDate();
        dd = dd < 10 ? ('0' + dd) : dd;

        let up_name = jo.owner.name;
        let typeName = jo.tname;
        // let remark = jo.duration;
        let vod = {
            vod_id: aid,
            vod_name: title,
            vod_pic: pic,
            type_name: typeName,
            vod_year: yy+mm+dd,
            vod_area: 'bilidanmu',
            // vod_remarks: remark,
            vod_tags: 'mv',
            vod_director: '🆙 ' + up_name + '　👥 ' + up_info.follower + '　' + relation,
            vod_actor: '▶' + stat.view + '　' + '💬' + stat.danmaku + '　' + '👍' + stat.like + '　' + '💰' + stat.coin + '　' + '⭐' + stat.favorite,
            vod_content: desc
        };
        let ja = jo.pages;
        let treeMap = {};
        let playurls = [];
        ja.forEach(function(tmpJo) {
            let cid = tmpJo.cid;
            let part = tmpJo.part.replace('#', '﹟').replace('$', '﹩');
            playurls.push(
                part + '$' + aid + '_' + cid
            )
        });
        treeMap['B站'] = playurls.join('#');
        let relatedData = JSON.parse(html).data.Related;
        playurls = [];
        relatedData.forEach(function(rd) {
            let ccid = rd.cid;
            let title = rd.title.replace('#', '﹟').replace('$', '﹩');
            let aaid = rd.aid;
            playurls.push(
                title + '$' + aaid + '_' + ccid
            )
        });
        treeMap['相关推荐'] = playurls.join('#');
        vod.vod_play_from = Object.keys(treeMap).join("$$$");
        vod.vod_play_url = Object.values(treeMap).join("$$$");
        VOD = vod;
    `,
    // 搜索:'*',
    搜索:`js:
        let html = request(input);
        function stripHtmlTag(src) {
            return src.replace(/<\\/?[^>]+(>|$)/g, '').replace(/&.{1,5};/g, '').replace(/\\s{2,}/g, ' ');
        }
        function turnDHM(duration) {
            let min = '';
            let sec = '';
            try {
                min = duration.split(':')[0];
                sec = duration.split(':')[1];
            } catch (e) {
                if (duration >= 3600) {
                    let rSAH = duration % 3600;
                    min = Math.floor(rSAH / 60);
                    sec = rSAH % 60;
                } else {
                    min = Math.floor(duration / 60);
                    sec = duration % 60;
                }
            }
            if (isNaN(parseInt(duration))) {
                return '无效输入';
            }
            if (min == 0) {
                return sec + '秒'
            } else if (0 < min && min < 60) {
                return min + '分'
            } else if (60 <= min && min < 1440) {
                if (min % 60 == 0) {
                    let h = min / 60;
                    return h + '小时'
                } else {
                    let h = min / 60;
                    h = (h + '').split('.')[0];
                    let m = min % 60;
                    return h + '小时' + m + '分';
                }
            } else if (min >= 1440) {
                let d = min / 60 / 24;
                d = (d + '').split('.')[0];
                let h = min / 60 % 24;
                h = (h + '').split('.')[0];
                let m = min % 60;
                let dhm = '';
                if (d > 0) {
                    dhm = d + '天'
                }
                if (h >= 1) {
                    dhm = dhm + h + '小时'
                }
                if (m > 0) {
                    dhm = dhm + m + '分'
                }
                return dhm
            }
            return null
        }
        let videos = [];
        let vodList = JSON.parse(html).data.result;
        vodList.forEach(function(vod) {
            let aid = vod.aid;
            let title = stripHtmlTag(vod.title);
            let img = vod.pic;
            if (img.startsWith('//')) {
                img = 'https:' + img;
            }
            let remark = turnDHM(vod.duration);
            videos.push({
                vod_id: aid,
                vod_name: title,
                vod_pic: img,
                vod_remarks: remark
            })
        });
        VODS = videos
    `,
    // 预处理:'if(rule_fetch_params.headers.Cookie.startsWith("http")){rule_fetch_params.headers.Cookie=fetch(rule_fetch_params.headers.Cookie);setItem(RULE_CK,cookie)};log(rule_fetch_params.headers.Cookie)',
}
var rule = {
    title:'我的哔哩',
    host:'https://api.bilibili.com',
    homeUrl:'/x/web-interface/ranking/v2?rid=0&type=origin', // 排行 > 排行榜 > 原创
    url:'/x/web-interface/search/type?search_type=videofyfilter',
    class_name:'MV&演唱会&白噪音&相声小品&戏曲&经典无损音乐合集&音乐&歌曲',
    class_url:'MV4K&演唱会4K&白噪音4K&相声小品&戏曲&经典无损音乐合集&音乐&歌曲',
    filterable: 1,
    filter_url: '&keyword={{fl.tid}}&page=fypage&duration={{fl.duration}}&order={{fl.order}}',
    filter_def:{
        经典无损音乐合集:{tid:'经典无损音乐合集'},
        
        音乐:{tid:'音乐'},
        歌曲:{tid:'歌曲'},
        MV4K:{tid:'MV4K'},
        演唱会4K:{tid:'演唱会4K'},
        白噪音4K:{tid:'白噪音4K'},
       
        相声小品:{tid:'相声小品'},
        戏曲:{tid:'戏曲'}
       
    },
    filter: {
        "经典无损音乐合集":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"经典无损音乐合集"},{"n":"粤语","v":"粤语歌曲超清"},{"n":"热榜","v":"2022年热们歌曲"},{"n":"经典","v":"经典老歌"},{"n":"古风","v":"古风歌曲"},{"n":"闽南","v":"闽南语歌曲"},{"n":"舞曲","v":"DJ歌曲"},{"n":"翻唱","v":"网红翻唱歌曲"},{"n":"音乐","v":"音乐 4k"},{"n":"阿黛尔","v":"阿黛尔演唱会超清超清"},{"n":"Blackpink","v":"blackpink演唱会超清"},{"n":"Beyond","v":"beyond演唱会超清"},{"n":"坂井泉水","v":"坂井泉水演唱会超清"},{"n":"宝丽金","v":"宝丽金演唱会超清"},{"n":"布兰妮","v":"布兰妮演唱会超清"},{"n":"陈瑞","v":"陈瑞演唱会超清"},{"n":"陈奕迅","v":"陈奕迅演唱会超清"},{"n":"崔健","v":"崔健演唱会超清"},{"n":"Coldplay","v":"coldplay演唱会超清"},{"n":"陈慧娴","v":"陈慧娴演唱会超清"},{"n":"陈百强","v":"陈百强演唱会超清"},{"n":"陈淑桦","v":"陈淑桦演唱会超清"},{"n":"陈慧琳","v":"陈慧琳演唱会超清"},{"n":"邓丽君","v":"邓丽君演唱会超清"},{"n":"邓紫棋","v":"邓紫棋演唱会超清"},{"n":"刀郎","v":"刀郎演唱会超清"},{"n":"达明一派","v":"刘以达歌曲"},{"n":"费玉清","v":"费玉清演唱会超清"},{"n":"谷村新司","v":"谷村新司演唱会超清"},{"n":"郭富城","v":"郭富城演唱会超清"},{"n":"邰正宵","v":"邰正宵演唱会超清"},{"n":"关淑怡","v":"关淑怡演唱会超清"},{"n":"黄凯芹","v":"黄凯芹演唱会超清"},{"n":"黑豹乐队","v":"H黑豹乐队"},{"n":"降央卓玛","v":"降央卓玛演唱会超清"},{"n":"江慧","v":"江慧歌曲"},{"n":"吉永小百合","v":"吉永小百合歌曲"},{"n":"金庸","v":"金庸影视歌曲"},{"n":"刘德华","v":"刘德华演唱会超清"},{"n":"Lady Gaga","v":"Lady Gaga演唱会超清"},{"n":"龙飘飘","v":"龙飘飘演唱会超清"},{"n":"罗百吉","v":"罗百吉演唱会超清"},{"n":"罗大佑","v":"罗大佑演唱会超清"},{"n":"林志炫","v":"林志炫演唱会超清"},{"n":"林忆莲","v":"林忆莲演唱会超清"},{"n":"李知恩","v":"李知恩演唱会超清"},{"n":"梁静茹","v":"梁静茹演唱会超清"},{"n":"冷漠","v":"冷漠演唱会超清"},{"n":"李克勤","v":"李克勤演唱会超清"},{"n":"林子祥","v":"林子祥演唱会超清"},{"n":"黎明","v":"黎明演唱会超清"},{"n":"刘若英","v":"刘若英演唱会超清"},{"n":"McHotdog","v":"MC Hotdog演唱会超清"},{"n":"莫文蔚","v":"莫文蔚演唱会超清"},{"n":"孟庭苇","v":"孟庭苇演唱会超清"},{"n":"麦当娜","v":"麦当娜演唱会超清"},{"n":"迈克杰克逊","v":"迈克杰克逊演唱会超清"},{"n":"雅尼紫禁城","v":"雅尼紫禁城演唱会超清"},{"n":"潘越云","v":"潘越云演唱会超清"},{"n":"潘美辰","v":"潘美辰演唱会超清"},{"n":"齐秦","v":"齐秦演唱会超清"},{"n":"祁美云","v":"祁美云演唱会超清"},{"n":"任贤齐","v":"任贤齐演唱会超清"},{"n":"苏慧伦","v":"苏慧伦演唱会超清"},{"n":"唐朝乐队","v":"唐朝乐队"},{"n":"童安格","v":"童安格演唱会超清"},{"n":"TFBOYS","v":"TFBOYS演唱会超清"},{"n":"太极乐队","v":"太极乐队演唱会超清"},{"n":"唐朝摇滚","v":"唐朝摇滚演唱会超清"},{"n":"谭咏麟","v":"谭咏麟演唱会超清"},{"n":"王琪","v":"王琪歌曲"},{"n":"伍珂玥","v":"伍珂玥演唱会超清"},{"n":"王杰","v":"王杰演唱会超清"},{"n":"伍佰","v":"伍佰演唱会超清"},{"n":"温兆伦","v":"温兆伦演唱会超清"},{"n":"王菲","v":"王菲演唱会超清"},{"n":"熊天平","v":"熊天平演唱会超清"},{"n":"徐小凤","v":"徐小凤演唱会超清"},{"n":"席琳迪翁","v":"席琳迪翁演唱会超清"},{"n":"许嵩","v":"黄许嵩演唱会超清"},{"n":"许美静","v":"许美静演唱会超清"},{"n":"许冠杰","v":"许冠杰演唱会超清"},{"n":"小虎队","v":"小虎队演唱会超清"},{"n":"许巍","v":"许巍演唱会超清"},{"n":"叶启田","v":"叶启田演唱会超清"},{"n":"叶玉卿","v":"叶玉卿演唱会超清"},{"n":"杨千嬅","v":"杨千嬅演唱会超清"},{"n":"左麟右李","v":"左麟右李演唱会超清"},{"n":"赵传","v":"赵传演唱会超清"},{"n":"周华健","v":"周华健演唱会超清"},{"n":"周启生","v":"周启生演唱会超清"},{"n":"张信哲","v":"张信哲演唱会超清"},{"n":"周慧敏","v":"周慧敏演唱会超清"},{"n":"张碧晨","v":"张碧晨演唱会超清"},{"n":"中岛美雪","v":"中岛美雪演唱会超清"},{"n":"张学友","v":"张学友演唱会超清"},{"n":"猪哥亮","v":"猪哥亮歌曲"},{"n":"周杰伦","v":"周杰伦演唱会超清"},{"n":"周深","v":"周深演唱会超清"},{"n":"张蔷","v":"张蔷演唱会超清"},{"n":"张帝","v":"张帝演唱会超清"},{"n":"张国荣","v":"张国荣演唱会超清"},{"n":"郑钧","v":"郑钧演唱会超清"},{"n":"张楚","v":"张楚演唱会超清"},{"n":"张真","v":"张真演唱会超清"},{"n":"赵传","v":"赵传演唱会超清"},{"n":"周传雄","v":"周传雄演唱会超清"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
       
        "MV4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"MV4K"},{"n":"S孙燕姿","v":"孙燕姿MV4K"},{"n":"SSHE","v":"SHEMV4K"},{"n":"Z周杰伦","v":"周杰伦MV4K"},{"n":"Z周传雄","v":"周传雄MV4K"},{"n":"M迈克尔杰克逊","v":"迈克尔杰克逊MV4K"},{"n":"A阿杜","v":"阿杜MV4K"},{"n":"A阿黛尔","v":"阿黛尔MV4K"},{"n":"BBeyond","v":"BeyondMV4K"},{"n":"BBy2","v":"By2MV4K"},{"n":"BBIGBANG","v":"BIGBANGMV4K"},{"n":"B布兰妮","v":"布兰妮MV4K"},{"n":"C陈奕迅","v":"陈奕迅MV4K"},{"n":"C蔡依林","v":"蔡依林MV4K"},{"n":"C初音未来","v":"初音未来MV4K"},{"n":"C蔡健雅","v":"蔡健雅MV4K"},{"n":"C陈小春","v":"陈小春MV4K"},{"n":"C草蜢","v":"草蜢MV4K"},{"n":"C陈慧娴","v":"陈慧娴MV4K"},{"n":"C崔健","v":"崔健MV4K"},{"n":"C仓木麻衣","v":"仓木麻衣MV4K"},{"n":"D戴荃","v":"戴荃MV4K"},{"n":"D动力火车","v":"动力火车MV4K"},{"n":"D邓丽君","v":"邓丽君MV4K"},{"n":"D丁当","v":"丁当MV4K"},{"n":"D刀郎","v":"刀郎MV4K"},{"n":"D邓紫棋","v":"邓紫棋MV4K"},{"n":"D戴佩妮","v":"戴佩妮MV4K"},{"n":"D邓丽君","v":"邓丽君MV4K"},{"n":"F飞儿乐队","v":"飞儿乐队MV4K"},{"n":"F费玉清","v":"费玉清MV4K"},{"n":"F费翔","v":"费翔MV4K"},{"n":"F方大同","v":"方大同MV4K"},{"n":"F房东的猫","v":"房东的猫MV4K"},{"n":"F凤飞飞","v":"凤飞飞MV4K"},{"n":"F凤凰传奇","v":"凤凰传奇MV4K"},{"n":"G古风歌曲","v":"古风歌曲4K"},{"n":"G国乐大典","v":"国乐大典4K"},{"n":"G郭采洁","v":"郭采洁MV4K"},{"n":"G光良","v":"光良MV4K"},{"n":"G郭静","v":"郭静MV4K"},{"n":"G郭富城","v":"郭富城MV4K"},{"n":"H胡彦斌","v":"胡彦斌MV4K"},{"n":"H胡夏","v":"胡夏MV4K"},{"n":"H韩红","v":"韩红MV4K"},{"n":"H黄品源","v":"黄品源MV4K"},{"n":"H黄小琥","v":"黄小琥MV4K"},{"n":"H花儿乐队","v":"花儿乐队MV4K"},{"n":"H黄家强","v":"黄家强MV4K"},{"n":"H后街男孩","v":"后街男孩MV4K"},{"n":"J经典老歌","v":"经典老歌4K"},{"n":"J贾斯丁比伯","v":"贾斯丁比伯MV4K"},{"n":"J金池","v":"金池MV4K"},{"n":"J金志文","v":"金志文MV4K"},{"n":"J焦迈奇","v":"焦迈奇MV4K"},{"n":"K筷子兄弟","v":"筷子兄弟MV4K"},{"n":"L李玟","v":"李玟MV4K"},{"n":"L林忆莲","v":"林忆莲MV4K"},{"n":"L李克勤","v":"李克勤MV4K"},{"n":"L刘宪华","v":"刘宪华MV4K"},{"n":"L李圣杰","v":"李圣杰MV4K"},{"n":"L林宥嘉","v":"林宥嘉MV4K"},{"n":"L梁静茹","v":"梁静茹MV4K"},{"n":"L李健","v":"李健MV4K"},{"n":"L林俊杰","v":"林俊杰MV4K"},{"n":"L李玉刚","v":"李玉刚MV4K"},{"n":"L林志炫","v":"林志炫MV4K"},{"n":"L李荣浩","v":"李荣浩MV4K"},{"n":"L李宇春","v":"李宇春MV4K"},{"n":"L洛天依","v":"洛天依MV4K"},{"n":"L林子祥","v":"林子祥MV4K"},{"n":"L李宗盛","v":"李宗盛MV4K"},{"n":"L黎明","v":"黎明MV4K"},{"n":"L刘德华","v":"刘德华MV4K"},{"n":"L罗大佑","v":"罗大佑MV4K"},{"n":"L林肯公园","v":"林肯公园MV4K"},{"n":"LLadyGaga","v":"LadyGagaMV4K"},{"n":"L旅行团乐队","v":"旅行团乐队MV4K"},{"n":"M莫文蔚","v":"莫文蔚MV4K"},{"n":"M毛不易","v":"毛不易MV4K"},{"n":"M梅艳芳","v":"梅艳芳MV4K"},{"n":"M迈克尔杰克逊","v":"迈克尔杰克逊MV4K"},{"n":"N南拳妈妈","v":"南拳妈妈MV4K"},{"n":"P朴树","v":"朴树MV4K"},{"n":"Q齐秦","v":"齐秦MV4K"},{"n":"Q青鸟飞鱼","v":"青鸟飞鱼MV4K"},{"n":"R容祖儿","v":"容祖儿MV4K"},{"n":"R热歌","v":"热歌MV4K"},{"n":"R任贤齐","v":"任贤齐MV4K"},{"n":"S水木年华","v":"水木年华MV4K"},{"n":"S孙燕姿","v":"孙燕姿MV4K"},{"n":"S苏打绿","v":"苏打绿MV4K"},{"n":"SSHE","v":"SHEMV4K"},{"n":"S孙楠","v":"孙楠MV4K"},{"n":"T陶喆","v":"陶喆MV4K"},{"n":"T谭咏麟","v":"谭咏麟MV4K"},{"n":"T田馥甄","v":"田馥甄MV4K"},{"n":"T谭维维","v":"谭维维MV4K"},{"n":"T逃跑计划","v":"逃跑计划MV4K"},{"n":"T田震","v":"田震MV4K"},{"n":"T谭晶","v":"谭晶MV4K"},{"n":"T屠洪刚","v":"屠洪刚MV4K"},{"n":"T泰勒·斯威夫特","v":"泰勒·斯威夫特MV4K"},{"n":"W王力宏","v":"王力宏MV4K"},{"n":"W王杰","v":"王杰MV4K"},{"n":"W吴克群","v":"吴克群MV4K"},{"n":"W王心凌","v":"王心凌MV4K"},{"n":"W汪峰","v":"汪峰MV4K"},{"n":"W伍佰","v":"伍佰MV4K"},{"n":"W王菲","v":"王菲MV4K"},{"n":"W五月天","v":"五月天MV4K"},{"n":"W汪苏泷","v":"汪苏泷MV4K"},{"n":"X徐佳莹","v":"徐佳莹MV4K"},{"n":"X弦子","v":"弦子MV4K"},{"n":"X萧亚轩","v":"萧亚轩MV4K"},{"n":"X许巍","v":"许巍MV4K"},{"n":"X薛之谦","v":"薛之谦MV4K"},{"n":"X许嵩","v":"许嵩MV4K"},{"n":"X小虎队","v":"小虎队MV4K"},{"n":"X萧敬腾","v":"萧敬腾MV4K"},{"n":"X谢霆锋","v":"谢霆锋MV4K"},{"n":"X徐小凤","v":"徐小凤MV4K"},{"n":"X信乐队","v":"信乐队MV4K"},{"n":"Y夜愿乐队","v":"夜愿乐队MV4K"},{"n":"Y原创音乐","v":"原创音乐MV4K"},{"n":"Y羽泉","v":"羽泉MV4K"},{"n":"Y粤语","v":"粤语MV4K"},{"n":"Y郁可唯","v":"郁可唯MV4K"},{"n":"Y叶倩文","v":"叶倩文MV4K"},{"n":"Y杨坤","v":"杨坤MV4K"},{"n":"Y庾澄庆","v":"庾澄庆MV4K"},{"n":"Y尤长靖","v":"尤长靖MV4K"},{"n":"Y易烊千玺","v":"易烊千玺MV4K"},{"n":"Y袁娅维","v":"袁娅维MV4K"},{"n":"Y杨丞琳","v":"杨丞琳MV4K"},{"n":"Y杨千嬅","v":"杨千嬅MV4K"},{"n":"Y杨宗纬","v":"杨宗纬MV4K"},{"n":"Z周杰伦","v":"周杰伦MV4K"},{"n":"Z张学友","v":"张学友MV4K"},{"n":"Z张信哲","v":"张信哲MV4K"},{"n":"Z张宇","v":"张宇MV4K"},{"n":"Z周华健","v":"周华健MV4K"},{"n":"Z张韶涵","v":"张韶涵MV4K"},{"n":"Z周深","v":"周深MV4K"},{"n":"Z纵贯线","v":"纵贯线MV4K"},{"n":"Z赵雷","v":"赵雷MV4K"},{"n":"Z周传雄","v":"周传雄MV4K"},{"n":"Z张国荣","v":"张国荣MV4K"},{"n":"Z周慧敏","v":"周慧敏MV4K"},{"n":"Z张惠妹","v":"张惠妹MV4K"},{"n":"Z周笔畅","v":"周笔畅MV4K"},{"n":"Z郑中基","v":"郑中基MV4K"},{"n":"Z张艺兴","v":"张艺兴MV4K"},{"n":"Z张震岳","v":"张震岳MV4K"},{"n":"Z中国好声音","v":"中国好声音MV4K"},{"n":"Z张雨生","v":"张雨生MV4K"},{"n":"Z郑智化","v":"郑智化MV4K"},{"n":"Z卓依婷","v":"卓依婷MV4K"},{"n":"Z中岛美雪","v":"中岛美雪MV4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "演唱会4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"演唱会4K"},{"n":"S孙燕姿","v":"孙燕姿演唱会4K"},{"n":"SSHE","v":"SHE演唱会4K"},{"n":"Z周杰伦","v":"周杰伦演唱会4K"},{"n":"Z周传雄","v":"周传雄演唱会4K"},{"n":"Z张学友","v":"张学友演唱会4K"},{"n":"M迈克尔杰克逊","v":"迈克尔杰克逊演唱会4K"},{"n":"A阿杜","v":"阿杜演唱会4K"},{"n":"A阿黛尔","v":"阿黛尔演唱会4K"},{"n":"BBeyond","v":"Beyond演唱会4K"},{"n":"BBy2","v":"By2演唱会4K"},{"n":"BBIGBANG","v":"BIGBANG演唱会4K"},{"n":"B布兰妮","v":"布兰妮演唱会4K"},{"n":"B坂井泉水","v":"坂井泉水演唱会4K"},{"n":"C陈奕迅","v":"陈奕迅演唱会4K"},{"n":"C蔡依林","v":"蔡依林演唱会4K"},{"n":"C初音未来","v":"初音未来演唱会4K"},{"n":"C蔡健雅","v":"蔡健雅演唱会4K"},{"n":"C陈小春","v":"陈小春演唱会4K"},{"n":"C草蜢","v":"草蜢演唱会4K"},{"n":"C陈慧娴","v":"陈慧娴演唱会4K"},{"n":"C崔健","v":"崔健演唱会4K"},{"n":"C仓木麻衣","v":"仓木麻衣演唱会4K"},{"n":"D戴荃","v":"戴荃演唱会4K"},{"n":"D动力火车","v":"动力火车演唱会4K"},{"n":"D邓丽君","v":"邓丽君演唱会4K"},{"n":"D丁当","v":"丁当演唱会4K"},{"n":"D刀郎","v":"刀郎演唱会4K"},{"n":"D邓紫棋","v":"邓紫棋演唱会4K"},{"n":"D戴佩妮","v":"戴佩妮演唱会4K"},{"n":"D邓丽君","v":"邓丽君演唱会4K"},{"n":"F飞儿乐队","v":"飞儿乐队演唱会4K"},{"n":"F费玉清","v":"费玉清演唱会4K"},{"n":"F费翔","v":"费翔演唱会4K"},{"n":"F方大同","v":"方大同演唱会4K"},{"n":"F房东的猫","v":"房东的猫演唱会4K"},{"n":"F凤飞飞","v":"凤飞飞演唱会4K"},{"n":"F凤凰传奇","v":"凤凰传奇演唱会4K"},{"n":"G郭采洁","v":"郭采洁演唱会4K"},{"n":"G光良","v":"光良演唱会4K"},{"n":"G郭静","v":"郭静演唱会4K"},{"n":"G郭富城","v":"郭富城演唱会4K"},{"n":"H胡彦斌","v":"胡彦斌演唱会4K"},{"n":"H胡夏","v":"胡夏演唱会4K"},{"n":"H韩红","v":"韩红演唱会4K"},{"n":"H黄品源","v":"黄品源演唱会4K"},{"n":"H黄小琥","v":"黄小琥演唱会4K"},{"n":"H花儿乐队","v":"花儿乐队演唱会4K"},{"n":"H黄家强","v":"黄家强演唱会4K"},{"n":"H后街男孩","v":"后街男孩演唱会4K"},{"n":"J经典老歌","v":"经典老歌演唱会4K"},{"n":"J贾斯丁比伯","v":"贾斯丁比伯演唱会4K"},{"n":"J金池","v":"金池演唱会4K"},{"n":"J金志文","v":"金志文演唱会4K"},{"n":"J焦迈奇","v":"焦迈奇演唱会4K"},{"n":"K筷子兄弟","v":"筷子兄弟演唱会4K"},{"n":"L李玟","v":"李玟演唱会4K"},{"n":"L林忆莲","v":"林忆莲演唱会4K"},{"n":"L李克勤","v":"李克勤演唱会4K"},{"n":"L刘宪华","v":"刘宪华演唱会4K"},{"n":"L李圣杰","v":"李圣杰演唱会4K"},{"n":"L林宥嘉","v":"林宥嘉演唱会4K"},{"n":"L梁静茹","v":"梁静茹演唱会4K"},{"n":"L李健","v":"李健演唱会4K"},{"n":"L林俊杰","v":"林俊杰演唱会4K"},{"n":"L李玉刚","v":"李玉刚演唱会4K"},{"n":"L林志炫","v":"林志炫演唱会4K"},{"n":"L李荣浩","v":"李荣浩演唱会4K"},{"n":"L李宇春","v":"李宇春演唱会4K"},{"n":"L洛天依","v":"洛天依演唱会4K"},{"n":"L林子祥","v":"林子祥演唱会4K"},{"n":"L李宗盛","v":"李宗盛演唱会4K"},{"n":"L黎明","v":"黎明演唱会4K"},{"n":"L刘德华","v":"刘德华演唱会4K"},{"n":"L罗大佑","v":"罗大佑演唱会4K"},{"n":"L林肯公园","v":"林肯公园演唱会4K"},{"n":"LLadyGaga","v":"LadyGaga演唱会4K"},{"n":"L旅行团乐队","v":"旅行团乐队演唱会4K"},{"n":"M莫文蔚","v":"莫文蔚演唱会4K"},{"n":"M毛不易","v":"毛不易演唱会4K"},{"n":"M梅艳芳","v":"梅艳芳演唱会4K"},{"n":"M迈克尔杰克逊","v":"迈克尔杰克逊演唱会4K"},{"n":"N南拳妈妈","v":"南拳妈妈演唱会4K"},{"n":"P朴树","v":"朴树演唱会4K"},{"n":"Q齐秦","v":"齐秦演唱会4K"},{"n":"Q青鸟飞鱼","v":"青鸟飞鱼演唱会4K"},{"n":"R容祖儿","v":"容祖儿演唱会4K"},{"n":"R任贤齐","v":"任贤齐演唱会4K"},{"n":"S水木年华","v":"水木年华演唱会4K"},{"n":"S孙燕姿","v":"孙燕姿演唱会4K"},{"n":"S苏打绿","v":"苏打绿演唱会4K"},{"n":"SSHE","v":"SHE演唱会4K"},{"n":"S孙楠","v":"孙楠演唱会4K"},{"n":"T陶喆","v":"陶喆演唱会4K"},{"n":"T谭咏麟","v":"谭咏麟演唱会4K"},{"n":"T田馥甄","v":"田馥甄演唱会4K"},{"n":"T谭维维","v":"谭维维演唱会4K"},{"n":"T逃跑计划","v":"逃跑计划演唱会4K"},{"n":"T田震","v":"田震演唱会4K"},{"n":"T谭晶","v":"谭晶演唱会4K"},{"n":"T屠洪刚","v":"屠洪刚演唱会4K"},{"n":"T泰勒·斯威夫特","v":"泰勒·斯威夫特演唱会4K"},{"n":"W王力宏","v":"王力宏演唱会4K"},{"n":"W王杰","v":"王杰演唱会4K"},{"n":"W吴克群","v":"吴克群演唱会4K"},{"n":"W王心凌","v":"王心凌演唱会4K"},{"n":"W汪峰","v":"汪峰演唱会4K"},{"n":"W伍佰","v":"伍佰演唱会4K"},{"n":"W王菲","v":"王菲演唱会4K"},{"n":"W五月天","v":"五月天演唱会4K"},{"n":"W汪苏泷","v":"汪苏泷演唱会4K"},{"n":"X徐佳莹","v":"徐佳莹演唱会4K"},{"n":"X弦子","v":"弦子演唱会4K"},{"n":"X萧亚轩","v":"萧亚轩演唱会4K"},{"n":"X许巍","v":"许巍演唱会4K"},{"n":"X薛之谦","v":"薛之谦演唱会4K"},{"n":"X许嵩","v":"许嵩演唱会4K"},{"n":"X小虎队","v":"小虎队演唱会4K"},{"n":"X萧敬腾","v":"萧敬腾演唱会4K"},{"n":"X谢霆锋","v":"谢霆锋演唱会4K"},{"n":"X徐小凤","v":"徐小凤演唱会4K"},{"n":"X信乐队","v":"信乐队演唱会4K"},{"n":"Y夜愿乐队","v":"夜愿乐队演唱会4K"},{"n":"Y羽泉","v":"羽泉演唱会4K"},{"n":"Y郁可唯","v":"郁可唯演唱会4K"},{"n":"Y叶倩文","v":"叶倩文演唱会4K"},{"n":"Y杨坤","v":"杨坤演唱会4K"},{"n":"Y庾澄庆","v":"庾澄庆演唱会4K"},{"n":"Y尤长靖","v":"尤长靖演唱会4K"},{"n":"Y易烊千玺","v":"易烊千玺演唱会4K"},{"n":"Y袁娅维","v":"袁娅维演唱会4K"},{"n":"Y杨丞琳","v":"杨丞琳演唱会4K"},{"n":"Y杨千嬅","v":"杨千嬅演唱会4K"},{"n":"Y杨宗纬","v":"杨宗纬演唱会4K"},{"n":"Z周杰伦","v":"周杰伦演唱会4K"},{"n":"Z张学友","v":"张学友演唱会4K"},{"n":"Z张信哲","v":"张信哲演唱会4K"},{"n":"Z张宇","v":"张宇演唱会4K"},{"n":"Z周华健","v":"周华健演唱会4K"},{"n":"Z张韶涵","v":"张韶涵演唱会4K"},{"n":"Z周深","v":"周深演唱会4K"},{"n":"Z纵贯线","v":"纵贯线演唱会4K"},{"n":"Z赵雷","v":"赵雷演唱会4K"},{"n":"Z周传雄","v":"周传雄演唱会4K"},{"n":"Z张国荣","v":"张国荣演唱会4K"},{"n":"Z周慧敏","v":"周慧敏演唱会4K"},{"n":"Z张惠妹","v":"张惠妹演唱会4K"},{"n":"Z周笔畅","v":"周笔畅演唱会4K"},{"n":"Z郑中基","v":"郑中基演唱会4K"},{"n":"Z张艺兴","v":"张艺兴演唱会4K"},{"n":"Z张震岳","v":"张震岳演唱会4K"},{"n":"Z张雨生","v":"张雨生演唱会4K"},{"n":"Z郑智化","v":"郑智化演唱会4K"},{"n":"Z卓依婷","v":"卓依婷演唱会4K"},{"n":"Z中岛美雪","v":"中岛美雪演唱会4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
     
        "音乐":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"音乐4K"},{"n":"钢琴","v":"钢琴曲"},{"n":"小提琴","v":"小提音乐"},{"n":"手风琴","v":"手风音乐"},{"n":"二胡","v":"二胡音乐"},{"n":"古筝","v":"古筝音乐"},{"n":"笛子","v":"笛子音乐"},{"n":"琵琶","v":"琵琶音乐"},{"n":"古琴","v":"古琴音乐"},{"n":"编钟","v":"编钟音乐"},{"n":"协奏曲","v":"协奏曲"},{"n":"中国古风音乐","v":"中国古风音乐"},{"n":"背景音乐","v":"背景音乐"},{"n":"助眠音乐","v":"助眠音乐"},{"n":"胎教音乐","v":"胎教音乐"},{"n":"芭蕾舞曲","v":"芭蕾舞曲"},{"n":"拉丁舞曲","v":"拉丁舞曲"},{"n":"爵士舞曲","v":"爵士舞曲"},{"n":"摩登舞曲","v":"摩登舞曲"},{"n":"DJ舞曲","v":"DJ舞曲"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "歌曲":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"歌曲超清"},{"n":"歌曲合集","v":"经典无损音乐合集"},{"n":"歌曲热榜","v":"2022年歌曲排行榜"},{"n":"香港歌曲","v":"香港歌曲"},{"n":"台湾歌曲","v":"台湾歌曲"},{"n":"内地歌曲","v":"内地歌曲"},{"n":"粤语歌曲","v":"粤语歌曲"},{"n":"闽南歌曲","v":"闽南语歌曲"},{"n":"英文歌曲","v":"英文歌曲"},{"n":"日文歌曲","v":"日文歌曲"},{"n":"印度歌曲","v":"印度歌曲"},{"n":"韩国歌曲","v":"韩国歌曲"},{"n":"小语种歌曲","v":"小语种歌曲"},{"n":"经典老歌","v":"经典老歌"},{"n":"抖音热歌","v":"抖音热歌"},{"n":"网红翻唱","v":"网红翻唱"},{"n":"劲歌","v":"劲歌"},{"n":"慢歌","v":"慢歌"},{"n":"古风","v":"古风歌曲"},{"n":"舞曲","v":"DJ歌曲"},{"n":"欢快歌曲","v":"欢快歌曲"},{"n":"伤感歌曲","v":"伤感歌曲"},{"n":"70年代歌曲","v":"70年代歌曲"},{"n":"80年代歌曲","v":"80年代歌曲"},{"n":"90年代歌曲","v":"90年代歌曲"},{"n":"00年代歌曲","v":"00年代歌曲"},{"n":"10年代歌曲","v":"10年代歌曲"},{"n":"2020年歌曲","v":"2020年歌曲"},{"n":"2021年歌曲","v":"2021年歌曲"},{"n":"2022年歌曲","v":"2022年歌曲"},{"n":"经典儿歌","v":"经典儿歌"},{"n":"大合唱","v":"大合唱"},{"n":"音乐汇","v":"音乐汇"},{"n":"美声歌曲","v":"美声歌曲"},{"n":"通俗歌曲","v":"通俗歌曲"},{"n":"民族歌曲","v":"民族歌曲"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "平面设计教学":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"平面设计教学"},{"n":"AdobePhotoshop","v":"AdobePhotoshop教程"},{"n":"AdobeIllustrator","v":"AdobeIllustrator教程"},{"n":"CorelDRAW","v":"CorelDRAW教程"},{"n":"AdobeInDesign","v":"AdobeInDesign教程"},{"n":"AdobePagermaker","v":"AdobePagermaker教程"},{"n":"SAI","v":"SAI教程"},{"n":"AdobeBridge","v":"AdobeBridge教程"},{"n":"AdobePagermaker","v":"AdobePagermake教程r"},{"n":"3DStudioMax","v":"3DStudioMax教程"},{"n":"PR","v":"PR教程"},{"n":"AE","v":"AE教程"},{"n":"CINEMA4D","v":"CINEMA4D教程"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
      
        "白噪音4K":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"白噪音4K"},{"n":"窗白噪音","v":"窗白噪音4K"},{"n":"环境白噪音","v":"环境白噪音4K"},{"n":"自然白噪音","v":"自然白噪音4K"},{"n":"助眠白噪音","v":"助眠白噪音4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
     
        "相声小品":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"相声小品"},{"n":"C陈佩斯","v":"陈佩斯小品4K"},{"n":"C春晚小品","v":"春晚小品4K"},{"n":"C曹云金","v":"曹云金相声4K"},{"n":"D单口相声","v":"单口相声4K"},{"n":"D德云社","v":"德云社小品4K"},{"n":"E二人转","v":"二人转4K"},{"n":"F冯巩","v":"冯巩小品4K"},{"n":"G郭德纲","v":"郭德纲相声4K"},{"n":"G郭冬临","v":"郭冬临小品4K"},{"n":"G郭达","v":"郭达小品4K"},{"n":"K开心麻花","v":"开心麻花小品4K"},{"n":"P评书","v":"评书4K"},{"n":"P潘长江","v":"潘长江小品4K"},{"n":"Q青曲社","v":"青曲社相声4K"},{"n":"Q群口相声","v":"群口相声4K"},{"n":"S宋小宝","v":"宋小宝小品4K"},{"n":"W文松","v":"文松小品4K"},{"n":"X小曲","v":"小曲相声4K"},{"n":"X喜剧综艺","v":"喜剧综艺4K"},{"n":"Y严顺开","v":"严顺开小品4K"},{"n":"Y岳云鹏","v":"岳云鹏相声小品4K"},{"n":"Z赵本山","v":"赵本山小品4K"},{"n":"Z赵丽蓉","v":"赵丽蓉小品4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}],
        "戏曲":[{"key":"order","name":"排序","value":[{"n":"综合排序","v":"0"},{"n":"最多点击","v":"click"},{"n":"最新发布","v":"pubdate"},{"n":"最多弹幕","v":"dm"},{"n":"最多收藏","v":"stow"}]},{"key":"tid","name":"分类","value":[{"n":"全部","v":"戏曲4K"},{"n":"B梆子腔","v":"梆子腔戏曲4K"},{"n":"C采茶戏","v":"采茶戏戏曲4K"},{"n":"C潮剧","v":"潮剧戏曲4K"},{"n":"C彩调","v":"彩调戏曲4K"},{"n":"C川剧","v":"川剧戏曲4K"},{"n":"D滇剧","v":"滇剧戏曲4K"},{"n":"D傣剧","v":"傣剧戏曲4K"},{"n":"E二人台","v":"二人台戏曲4K"},{"n":"G高腔","v":"高腔戏曲4K"},{"n":"G高甲戏","v":"高甲戏戏曲4K"},{"n":"G赣剧","v":"赣剧戏曲4K"},{"n":"G桂剧","v":"桂剧戏曲4K"},{"n":"H黄梅戏","v":"黄梅戏戏曲4K"},{"n":"H河北梆子","v":"河北梆子戏曲4K"},{"n":"H河南曲剧","v":"河南曲剧戏曲4K"},{"n":"H淮剧","v":"淮剧戏曲4K"},{"n":"H沪剧","v":"沪剧戏曲4K"},{"n":"H滑稽戏","v":"滑稽戏戏曲4K"},{"n":"H徽剧","v":"徽剧4K"},{"n":"H汉剧","v":"汉剧戏曲4K"},{"n":"H湖南花鼓戏","v":"湖南花鼓戏戏曲4K"},{"n":"J京剧","v":"京剧戏曲4K"},{"n":"J晋剧","v":"晋剧戏曲4K"},{"n":"J吉剧","v":"吉剧戏曲4K"},{"n":"K昆曲","v":"昆曲戏曲4K"},{"n":"L梨园戏","v":"梨园戏戏曲4K"},{"n":"L龙江剧","v":"龙江剧戏曲4K"},{"n":"M闽剧","v":"闽剧戏曲4K"},{"n":"P评剧","v":"评剧戏曲4K"},{"n":"P蒲剧","v":"蒲剧戏曲4K"},{"n":"P皮影戏","v":"皮影戏戏曲4K"},{"n":"P莆仙戏","v":"莆仙戏戏曲4K"},{"n":"Q黔剧","v":"黔剧戏曲4K"},{"n":"Q祁剧","v":"祁剧戏曲4K"},{"n":"Q秦腔","v":"秦腔戏曲4K"},{"n":"S上党梆子","v":"上党梆子戏曲4K"},{"n":"S山东梆子","v":"山东梆子戏曲4K"},{"n":"S绍剧","v":"绍剧戏曲4K"},{"n":"W武安平调","v":"武安平调戏曲4K"},{"n":"W婺剧","v":"婺剧戏曲4K"},{"n":"X湘剧","v":"湘剧戏曲4K"},{"n":"Y越剧","v":"越剧戏曲4K"},{"n":"Y豫剧","v":"豫剧戏曲4K"},{"n":"Y雁剧","v":"雁剧戏曲4K"},{"n":"Y越调","v":"越调戏曲4K"},{"n":"Y粤剧","v":"粤剧戏曲4K"},{"n":"Z壮剧","v":"壮剧戏曲4K"},{"n":"Z藏剧","v":"藏剧戏曲4K"}]},{"key":"duration","name":"时长","value":[{"n":"全部","v":"0"},{"n":"60分钟以上","v":"4"},{"n":"30~60分钟","v":"3"},{"n":"10~30分钟","v":"2"},{"n":"10分钟以下","v":"1"}]}]
   
    },
    detailUrl:'/x/web-interface/view/detail?aid=fyid',//二级详情拼接链接(json格式用)
    searchUrl:'/x/web-interface/search/type?search_type=video&keyword=**&page=1',
    searchable:2,
    quickSearch:0,
    headers:{
        "User-Agent":"PC_UA",
        "Referer": "https://www.bilibili.com",
        // "Cookie":"$bili_cookie"
        "Cookie":"https://download.kstore.space/download/5063/tvbox/bilitoken.txt"
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
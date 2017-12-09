            
            var URLS = {
                prefix:"https://jwkwak45.github.io/todo/", //"localhost:8080"
                list:"json/groupList.json",
                eachList:"tasklist.html",
                groupAdd:"json/groupAdd.json",
                taskAdd: "json/taskAdd.json",
                taskList: "json/taskList.json",



                icon:{
                 unchecked: "https://jwkwak45.github.io/todo/source/check_undone.svg",
                 checked: "https://jwkwak45.github.io/todo/source/check_done.svg",
                 sun: "<img src = " + '"https://jwkwak45.github.io/todo/source/sun.svg"' +"width = '20px'; height = '20px';"+ "/>",
                 checkicon: "<img src = " + '"https://jwkwak45.github.io/todo/source/check.svg"' +"width = '20px'; height = '20px';"+ "/>",
                 myday:"<img src = " + '"https://jwkwak45.github.io/todo/source/sun_gray.svg"' +"width = '20px'; height = '20px';"+ "/>"+ '<span style="color:#6465ea; font-size:9pt ">오늘 할 일 </span>',
                 alarm: '<span style="color:gray"> • </span>'+ "<img src = " + '"https://jwkwak45.github.io/todo/source/alarmclock.svg"' +"width = '15px'; height = '15px';"+ "/>",
                 note: '<span style="color:gray"> • </span>'+"<img src = " + '"https://jwkwak45.github.io/todo/source/note.svg"' +"width = '15px'; height = '15px';"+ "/>"
                }
                

            };

            /*
            data = {
                data:[{},{},{}]

            }

            */ 

            function network(command, end, arg){
                switch(command){
                    case"eachList": 
                    location.href = URLS.prefix + URLS.eachList + "?id=" + encodeURIComponent(arg);
                    break;
                    case"taskList": 
                    $.get(URLS.prefix + URLS.taskList,{id:arg},end);
                    break;
                    case"addList":
                    $.get(URLS.prefix + URLS.groupAdd, {name:arg}, end);
                    //data.data.push({name:arg....});
                    //end(data);
                    break;
                    case"list":
                    $.get(URLS.prefix + URLS.list,end);
                    //end({data[....]}); 이런식으로 오프라인에서 테스트...
                    break;
                    case"taskAdd":
                    $.get(URLS.prefix + URLS.taskAdd, arg,end);
                    //data.data.push({name:arg....});
                    //end(data);
                    break;
                    case"toggleComplete":
                    $.get(URLS.prefix + URLS.taskList,arg,end);
                    break;

                    default: throw "invalid command";
                }
            }
         
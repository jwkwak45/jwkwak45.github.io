            
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
                },

                data: { data: [
                    
                           
                            {"id":1,
                            "tid":1,
                            "name":"할일 1",
                            "myday":false, 
                            "duedate":null,
                            "fre_alert":null,
                            "note": null, 
                            "repeat":null, 
                            "done":false 
                    
                    
                            },
                            {"id":2,
                                "tid":2, 
                                "name":"다른 할 일",
                                "myday":false, 
                                "duedate":null,
                                "fre_alert":null,
                                "note": null, 
                                "repeat":null, 
                                "done":false 
                        
                        
                                },
                                {"id":3,
                                    "tid":3, 
                                    "name":"할일 1",
                                    "myday":false, 
                                    "duedate":null,
                                    "fre_alert":null,
                                    "note": null, 
                                    "repeat":null, 
                                    "done":false 
                            
                            
                                    },
                                    {"id":3,
                                        "tid":4,
                                        "name":"할일 1",
                                        "myday":false, 
                                        "duedate":null,
                                        "fre_alert":null,
                                        "note": null, 
                                        "repeat":null, 
                                        "done":false 
                                
                                
                                        },
                    
                            { "id":4,
                                "tid":5,
                                "name":"할일 2",
                                "myday":true, 
                                "duedate":"2017:11:15", 
                                "fre_alert":"2017:11:15:11:50", 
                                "note": "hi", 
                                "repeat":[{"weeks":"3"},
                                     {"weekday":["mon", "tue"]},
                                     {"month":"11"},
                                     {"date":"11"}] ,
                                
                                "done":true 
                             },
                    
                             { "id":5,
                                "tid":6, 
                                "name":"할일 3",
                                "myday":true, 
                                "duedate":"2017:11:15", 
                                "fre_alert":"2017:11:15:11:50", 
                                "note": "hi", 
                                "repeat":[{"weeks":"3"},
                                     {"weekday":["mon", "tue"]},
                                     {"month":"11"},
                                     {"date":"11"}] ,
                                
                                "done":false 
                             },
                    
                             { "id":3, 
                                "tid":7,
                                "name":"할일 4",
                                "myday":true, 
                                "duedate":"2017:11:15", 
                                "fre_alert":"2017:11:15:11:50", 
                                "note": "hi", 
                                "repeat":[{"weeks":"3"},
                                     {"weekday":["mon", "tue"]},
                                     {"month":"11"},
                                     {"date":"11"}] ,
                                
                                "done":false 
                             }
                    
                    
                    
                        ]
                    }
            };


            function network(command, end, arg){
                switch(command){
                    case"eachList": 
                    location.href = URLS.prefix + URLS.eachList + "?id=" + encodeURIComponent(arg);
                    break;
                    case"taskList": 
                    //$.get(URLS.prefix + URLS.taskList,{id:arg},end);
                    end(URLS.data,"ok");
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
                    //$.get(URLS.prefix + URLS.taskAdd, arg,end);
                    URLS.data.data.push({
                    "id":arg.id,
                    "name":arg.name,
                    "myday":false, 
                    "duedate":null,
                    "fre_alert":null, 
                    "note": null, 
                    "repeat":null, 
                    "done":false 
                     });
                    end(URLS.data,"ok");
                    break;
                    case"toggleComplete":
                    //$.get(URLS.prefix + URLS.taskList,arg,end);
                    for(i=0;i<URLS.data.data.length;i++){
                        item = URLS.data.data[i]
                        if(item.tid == arg.tid){
                            item.done = arg.done;

                        }

                    };
                    end(URLS.data,"ok");


                    break;

                    default: throw "invalid command";
                }
            }
         
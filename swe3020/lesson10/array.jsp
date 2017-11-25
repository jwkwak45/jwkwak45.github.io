<%@ page contentType="text/html; charset=utf-8" language="java" %>
<%@ page import = "java.util.ArrayList"  language="java" %>

<%!
ArrayList<String> ar = new ArrayList<>();
{ar.add("홍길동");
ar.add("김철수");
ar.add("김영희");
}
%>


<html>
    <head>
        <title>Array</title>
    </head>

    <body>
        <%
        for(int i = 0; i<ar.size(); i++){

            out.print("배열요소: " + ar.get(i)+"<br/>");
        }
        %>

    </body>

</html>


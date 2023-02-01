<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>興富發</title>
    <link rel="icon" type="image/x-icon" href="styles/images/favicon.ico" />
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;900&family=Noto+Sans+TC:wght@400;500;700&display=swap" rel="stylesheet">
    
    <link rel="stylesheet" href="https://code.jquery.com/ui/1.10.4/themes/ui-lightness/jquery-ui.css">
    <link rel="stylesheet" type="text/css" href="styles/style.css" />
     <script src="scripts\plugins\jquery.min.js"></script>
    <script src="//code.jquery.com/ui/1.10.4/jquery-ui.js"></script>
</head>
<body>
    <div id="data">
        <div class="d-flex justify-content-between align-items-center mb-4">
            <h1>興富發T1官網 - 客戶聯絡資料</h1>
            <div class="d-flex">
                <form class="d-flex align-items-center" action="">
                    <div class="date-wrapper">
                        <input class="date-element" type="text" id="dateStart" name="dateStart">
                        <i class="icon-date"></i>
                    </div>
                    <div class="px-2">-</div>
                    
                    <div class="date-wrapper">
                        <input class="date-element" type="text" id="dateEnd" name="dateEnd">
                        <i class="icon-date"></i>
                    </div>   
                    <button class="submit" type="submit">搜尋</button>
                </form> 
                   <button class="excel" type="button">
                       <span>匯出Excel</span>
                       <i class="icon-excel ms-1"></i>
                   </button>        
            </div>
        </div>
        <table>
            <thead>
                <tr>
                    <th>No</th>
                    <th>姓名</th>
                    <th>信箱</th>
                    <th>電話</th>
                    <th>建立日期</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>1</td>
                    <td>興富發</td>
                    <td>testtesttest@gmail.com</td>
                    <td>27955801</td>
                    <td>2022/12/10 14:21:51</td>
                </tr>
                            <tr>
                    <td>1</td>
                    <td>興富發</td>
                    <td>testtesttest@gmail.com</td>
                    <td>27955801</td>
                    <td>2022/12/10 14:21:51</td>
                </tr>
                            <tr>
                    <td>1</td>
                    <td>興富發</td>
                    <td>testtesttest@gmail.com</td>
                    <td>27955801</td>
                    <td>2022/12/10 14:21:51</td>
                </tr>
            </tbody>
        </table>
        <p>Copyright © 2022 Highwealth Construction. All Rights Reserved. </p>
    </div>
    <script>
        $(function() {
        $.datepicker.regional['zh-TW'] = {
            closeText: '關閉',
            prevText: '&#x3C;上月',
            nextText: '下月&#x3E;',
            currentText: '今天',
            monthNames: ['一月','二月','三月','四月','五月','六月',
            '七月','八月','九月','十月','十一月','十二月'],
            monthNamesShort: ['一月','二月','三月','四月','五月','六月',
            '七月','八月','九月','十月','十一月','十二月'],
            dayNames: ['星期日','星期一','星期二','星期三','星期四','星期五','星期六'],
            dayNamesShort: ['周日','周一','周二','周三','周四','周五','周六'],
            dayNamesMin: ['日','一','二','三','四','五','六'],
            weekHeader: '周',
            dateFormat: 'yy/mm/dd',
            firstDay: 1,
            isRTL: false,
            showMonthAfterYear: true,
            yearSuffix: '年'};

            $.datepicker.setDefaults($.datepicker.regional["zh-TW"]);
            $(".date-element").datepicker();
        });
    </script>
</body>
</html>
let isEnglish = false;
        function changeLanguage() {

            if (isEnglish) {
                document.getElementById('button').innerHTML = 'English/انگلیسی';

                document.getElementById('name').innerHTML = 'نام:';
                document.getElementById('password').innerHTML = 'رمز عبور:';

                document.getElementById('text1').innerHTML = 'سلام من کیانمهر هستم';
                document.getElementById('text2').innerHTML = 'این مود فارسی هست';

                document.getElementById('submit').innerHTML = 'ارسال';

                document.documentElement.lang = 'fa';
                document.documentElement.dir = 'rtl';

                isEnglish = false;

            } else {
                document.getElementById('button').innerHTML = 'Persian/فارسی';

                document.getElementById('name').innerHTML = 'Name:';
                document.getElementById('password').innerHTML = 'Password:';

                document.getElementById('text1').innerHTML = 'hi im kianmehr';
                document.getElementById('text2').innerHTML = 'this is the English mode';

                document.getElementById('submit').innerHTML = 'send';

                document.documentElement.lang = 'en';
                document.documentElement.dir = 'ltr';

                isEnglish = true;
            }
        }

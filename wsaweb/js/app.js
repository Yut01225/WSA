var ncmb = new NCMB("042a20ddcb3b75d38410e5e83e4b4ccda0bfaa165cd2743aee8dfe0149cd6ac7", "e03ac3200022862a72784fbe3ff44a06bddc8fb402eda2143b4675fb5c0edd8e");
var currentUser = ncmb.User.getCurrentUser();
if (currentUser) {
    console.log("ログイン中のユーザー: " + currentUser.get("userName"));
} else {
    console.log("未ログインまたは取得に失敗");
}
function onRegisterBtn() {
    console.log("ugoita")
    //入力フォームからusername, password変数にセット
    var username = $("#reg_username").val();
    var password = $("#reg_password").val();

    var user = new ncmb.User();
    user.set("userName", username)
        .set("password", password);

    // ユーザー名とパスワードで新規登録
    user.signUpByAccount()
        .then(function (reg_user) {
            // 新規登録したユーザーでログイン
            ncmb.User.login(reg_user)
                .then(function (login_user) {
                    alert("新規登録とログイン成功");
                    currentLoginUser = ncmb.User.getCurrentUser();

                    if (currentLoginUser) {
                        console.log("ログイン中のユーザー: " + currentLoginUser.get("userName"));
                        window.location.href = 'index1.html';
                    } else {
                        console.log("未ログインまたは取得に失敗");
                    }

                })
                .catch(function (error) {
                    alert("ログイン失敗！次のエラー発生: " + error);
                });
        })
        .catch(function (error) {
            alert("新規登録に失敗！次のエラー発生：" + error);
        });
}
function onLoginBtn() {
    var username = $("#login_username").val();
    var password = $("#login_password").val();
    // ユーザー名とパスワードでログイン
    ncmb.User.login(username, password)
        .then(function (user) {
            alert("ログイン成功");
            currentLoginUser = ncmb.User.getCurrentUser();
            if (currentLoginUser) {
                console.log("ログイン中のユーザー: " + currentLoginUser.get("userName"));
                window.location.reload();
            } else {
                console.log("未ログインまたは取得に失敗");
            }

        })
        .catch(function (error) {
            alert("ログイン失敗！次のエラー発生: " + error);
        });
}
function onLogoutBtn() {
    ncmb.User.logout();
    alert('ログアウト成功');
    currentLoginUser = null;
    window.location.reload();
}
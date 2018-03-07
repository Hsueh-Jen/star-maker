//在這邊寫javascript

var places = ['士林', '北投', '木柵', '三重', '南港', '淡水', '新店', '蘆洲', '古亭', '中壢', '池上', '汐止', '三峽'];
var stars = ['金城武', '劉德華', '周杰倫', '蔡依林', '新垣結衣', '宋仲基', '鄭容和', '蕭敬騰', '五月天', '池昌旭', '魔力紅'];

function makeStar() {
    var place = places[Math.floor(Math.random() * places.length)];
    var star = stars[Math.floor(Math.random() * stars.length)];
    $('#result').html(place + star)
}

$('button').click(makeStar);

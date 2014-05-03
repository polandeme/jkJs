function H(selector) {
    var results;
    var select_flag = selector[0];
    var select_target = selector.substr(1);
    if(select_flag === '#') {
        results = document.getElementById(select_target);
    } else if(select_flag === '.') {
        results = document.getElementsByClassName(select_target);
    } else {
        results = document.getElementsByTagName(select_flag);
    }
    return results;
}

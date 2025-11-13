document.getElementById('more-btn').onclick = function() {
  document.getElementById('more-link').style.display = 'block';  // 显示链接
  document.getElementById('more-btn').style.display = 'none';    // 隐藏按钮
};

window.onload = function() {
  // 获取按钮和链接元素
  var moreBtn = document.getElementById('more-btn');
  var moreLink = document.getElementById('more-link');
  
  if (moreBtn && moreLink) {
    moreBtn.onclick = function() {
      moreLink.style.display = 'block';  // 显示链接
      moreBtn.style.display = 'none';    // 隐藏按钮
    };
  } else {
    console.log('按钮或链接未找到');  // 如果没有找到按钮或链接，输出调试信息
  }
};

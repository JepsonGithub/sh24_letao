/**
 * Created by Jepson on 2018/8/7.
 */

// 实现进度条功能测试

//// 开启进度条
//NProgress.start();
//
//setTimeout(function() {
//  // 关闭进度条
//  NProgress.done();
//}, 1000)


// ajax全局事件
// 1. ajaxComplete() 每个ajax请求完成时调用 (不管成功还是失败都会调用)
// 2. ajaxError()   每个ajax失败时调用
// 3. ajaxSend()    每个ajax发送前调用
// 4. ajaxStart()   第一个ajax请求被发送时调用
// 5. ajaxStop()    全部的ajax请求完成时调用
// 6. ajaxSuccess() 每个ajax成功时调用

// 在发送第一个ajax请求时, ajaxStart,  开启进度条,
$(document).ajaxStart(function() {
  // 开启进度条
  NProgress.start();
})

// 在最后一个ajax请求回来时, 关闭进度条
$(document).ajaxStop(function() {

  // 模拟网络延迟
  setTimeout(function() {
    // 关闭进度条
    NProgress.done();
  }, 500);

});



// webpackJsonp([48], {
//     0: function(t, o, n) {
//         t.exports = n(114)
//     },
//     114: function(t, o) {
//         function n() {
//             $.ajax({
//                 type: "post",
//                 url: "/Home/Exit",
//                 dataType: "json",
//                 error: function(t) {},
//                 success: function(t) {
//                     t.OK && (location.href = "/")
//                 }
//             })
//         }
//         function c() {
//             if (window.applicationCache) {
//                 var t = {
//                     title: document.title
//                 };
//                 history.replaceState(t, document.title, "/")
//             }
//         }
//         $(function() {
//             $.ajax({
//                 type: "post",
//                 url: "/Home/Cache",
//                 dataType: "json",
//                 error: function(t) {
//                     location.href = "/"
//                 },
//                 success: function(t) {
//                     t.OK && (c(),
//                         location.href = "/")
//                 }
//             }),
//                 $("#org-exit").click(function() {
//                     n()
//                 }),
//                 $("[data-href]").click(function() {
//                     location.href = $(this).attr("data-href")
//                 })
//         })
//     }
// });
$("[data-href]").click(function() {
    location.href = $(this).attr("data-href")
})
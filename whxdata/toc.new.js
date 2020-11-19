(function () {
  var toc = [
    { "type": "book", "name": "视觉小说制作器", "key": "toc1", "url": "Visual_Novel_Maker.htm" },
    { "type": "book", "name": "探索编辑器", "key": "toc2" },
    { "type": "book", "name": "初学者指南", "key": "toc9", "url": "Beginner_s_Guide.htm" },
    { "type": "book", "name": "脚本开发者指南", "key": "toc18", "url": "Scripter_s_Guide.htm" },
    { "type": "book", "name": "脚本和插件的引用", "key": "toc21" },
    { "type": "book", "name": "License and Credits", "key": "toc30" }];
  window.rh.model.publish(rh.consts('KEY_TEMP_DATA'), toc, { sync: true });
})();
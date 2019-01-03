## d_comment [thinkcmf插件]
> 通用文章评论。  


### 插件配置

* 是否开启评论
* 是否开启审核评论
* 设置每次评论间隔时间

### 后台管理

* 批量审核、删除评论 
* 根据审核状态、时间、用户、评论关键词 查询评论

### 安装及说明

 1. d_comment 目录添加到public/plugins目录下
 2. 后台插件中心-》插件列表找到DComment安装
 3. 点击设置 是否开启 项 开 即启用

- 评论表是用的系统自带的cmf_comment表。
- 评论已关联文章表(cmf_portal_post)的评论数，若开启评论审核，会出现前台显示评论数量与展示评论条数不同，因为评论没审核的前台不会展示。这处的逻辑可自己更改，用户评论时，判断是否开启审核，开启则不加1，后台审核后再给文章评论数加1。

- 删除评论已关联文章评论字段，无须调整。 


### 问题反馈
在使用中有任何问题，欢迎反馈给我，可以用以下联系方式跟我交流

* 邮件(3471677985#qq.com, 把#换成@) 
* thinkcmf官网d_comment插件详情页留言

### 捐助开发者
希望你喜欢我的作品，同时也能支持一下。

Copyright (c) 2018 daliycode.com
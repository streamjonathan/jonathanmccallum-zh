---
title: "推荐一位艺术家"
slug: suggest-an-artist
---

我很喜欢听到跟随耶稣的音乐人和艺术家的消息。如果你认识想让我写一写、采访一下，或做个反应视频的人，请在这里告诉我。

一个名字加一个链接就够了，再用几句话说说为什么是他。我会认真读每一条发来的消息。非常感谢。

有你认识的人吗？点一下照片，表格会自动填好——然后用几句话说说为什么是他，再发送。

<div class="suggest-carousel" role="list" aria-label="可以推荐的音乐人和艺术家">
{% for artist in suggest_carousel %}
  <button type="button" class="suggest-pick" role="listitem" data-artist="{{ artist.name }}" data-link="{{ artist.profile }}" title="推荐 {{ artist.name }}">
    <img src="{{ artist.img }}" alt="{{ artist.name }}" loading="lazy" width="150" height="150">
    <span class="suggest-pick__name">{{ artist.name }}</span>
    <span class="suggest-pick__note">{{ artist.note }}</span>
  </button>
{% endfor %}
</div>

<p class="suggest-carousel__more">或者在下面推荐一个新人——你觉得我应该认识的人，都可以。</p>

本站不适合未满18岁的人。

<form id="suggest-form" class="suggest-form">
  <label for="suggest-artist">艺术家的名字</label>
  <input id="suggest-artist" name="artist" type="text" maxlength="200" placeholder="我该去看谁？" required>

  <label for="suggest-link">社交媒体主页链接</label>
  <input id="suggest-link" name="link" type="url" maxlength="500" placeholder="https://www.instagram.com/…" required>

  <fieldset class="suggest-kinds">
    <legend>我可以为他们做什么？</legend>
    <label><input type="checkbox" name="kind" value="write"> 写一篇文章</label>
    <label><input type="checkbox" name="kind" value="interview"> 采访他们</label>
    <label><input type="checkbox" name="kind" value="reaction"> 做一个反应视频</label>
  </fieldset>

  <label for="suggest-why">为什么是他？</label>
  <textarea id="suggest-why" name="why" rows="3" maxlength="500" placeholder="几句话就够了……"></textarea>

  <label for="suggest-name">你的名字 <span class="optional">(选填)</span></label>
  <input id="suggest-name" name="fromName" type="text" maxlength="100" placeholder="这样我才能向你道谢">

  <label for="suggest-from-link">你的社交媒体主页链接 <span class="optional">(选填)</span></label>
  <input id="suggest-from-link" name="fromLink" type="url" maxlength="500" placeholder="https://www.instagram.com/…">

  <button id="suggest-button" type="button">发送推荐</button>

  <p id="suggest-result" aria-live="polite"></p>
</form>

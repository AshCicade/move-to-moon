import{_ as i,c as a,a1 as l,o as n}from"./chunks/framework.BiEclOij.js";const g=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"guides/java/apache-poi/quick-guide.md","filePath":"guides/java/apache-poi/quick-guide.md"}'),h={name:"guides/java/apache-poi/quick-guide.md"};function t(e,s,k,p,E,r){return n(),a("div",null,s[0]||(s[0]=[l(`<h2 id="创建-workbook" tabindex="-1">创建 Workbook <a class="header-anchor" href="#创建-workbook" aria-label="Permalink to &quot;创建 Workbook&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Workbook wb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HSSFWorkbook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或 </span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Workbook wb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XSSFWorkbook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span></code></pre></div><h2 id="创建-sheet" tabindex="-1">创建 Sheet <a class="header-anchor" href="#创建-sheet" aria-label="Permalink to &quot;创建 Sheet&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Workbook wb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HSSFWorkbook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();  </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 或 new XSSFWorkbook();</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 方式一：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Sheet sheet1 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wb.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createSheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;first sheet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 方式二：</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">String safeName </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> WorkbookUtil.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createSafeSheetName</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;[O&#39;Brien&#39;s sales*?]&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 实际名称：&quot; O&#39;Brien&#39;s sales   &quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Sheet sheet2 </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wb.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createSheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(safeName);</span></span></code></pre></div><div class="tip custom-block"><p class="custom-block-title">TIP</p><p>sheet 的名称 <strong>不能超过31个字符</strong>，并且不能包含以下任何一个字符：<code>0x0000（NULL值）</code>，<code>0x0003（回车）</code>，<code>:</code>，<code>\\</code>，<code>*</code>，<code>?</code>，<code>/</code>，<code>[</code>，<code>]</code>。可以使用 <code>org.apache.poi.ss.util.WorkbookUtil#createSafeSheetName(String nameProposal)</code> 创建有效名称，此方法会将 <code>nameProposal</code> 中的无效字符替换为空格 <code>&#39; &#39;</code>。</p></div><h2 id="创建-cells-单元格" tabindex="-1">创建 Cells（单元格） <a class="header-anchor" href="#创建-cells-单元格" aria-label="Permalink to &quot;创建 Cells（单元格）&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Workbook wb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HSSFWorkbook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">//Workbook wb = new XSSFWorkbook();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CreationHelper createHelper </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wb.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getCreationHelper</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Sheet sheet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wb.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createSheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;new sheet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建行，并为其创建单元格，行数从0开始</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Row row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sheet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第一行</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 创建单元格，并设置值</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cell cell </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第1个单元格</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cell.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCellValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">row.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCellValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1.2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第2个单元格</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">row.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCellValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(createHelper.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRichTextString</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is a string&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第3个单元格</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">row.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">).</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCellValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">true</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">); </span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 第4个单元格</span></span></code></pre></div><h3 id="单元格数据类型设置" tabindex="-1">单元格数据类型设置 <a class="header-anchor" href="#单元格数据类型设置" aria-label="Permalink to &quot;单元格数据类型设置&quot;">​</a></h3><h2 id="对齐选项" tabindex="-1">对齐选项 <a class="header-anchor" href="#对齐选项" aria-label="Permalink to &quot;对齐选项&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> static</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> main</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">String</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[] args) throws Exception {</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Workbook wb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> XSSFWorkbook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Sheet sheet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wb.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createSheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Row row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sheet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    Cell cell </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cell.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCellValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;Align It&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    CellStyle cellStyle </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wb.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 水平居中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cellStyle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setAlignment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(HorizontalAlignment.CENTER);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 垂直居中</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cellStyle.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setVerticalAlignment</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(VerticalAlignment.CENTER);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    cell.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(cellStyle);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre></div><h3 id="水平方向-horizontalalignment-枚举" tabindex="-1">水平方向（<code>HorizontalAlignment</code> 枚举） <a class="header-anchor" href="#水平方向-horizontalalignment-枚举" aria-label="Permalink to &quot;水平方向（\`HorizontalAlignment\` 枚举）&quot;">​</a></h3><ul><li><strong>GENERAL</strong>：一般对齐方式。文本数据是左对齐的。数字、日期和时间右对齐。布尔类型居中。</li><li><strong>LEFT</strong>：左对齐。即使在从右到左的模式下，水平对齐方式也是左对齐的。在单元格的左边缘对齐内容。如果指定了缩进量，则单元格的内容会从左侧缩进指定数量的字符空格。字符空格基于工作簿的默认字体和字体大小。</li><li><strong>CENTER</strong>：居中对齐。</li><li><strong>RIGHT</strong>：右对齐。单元格的内容对齐在单元格的右边缘。</li><li><strong>FILL</strong>：填充对齐。表示单元格的值应该填充整个单元格的宽度。如果右边的空白单元格也是填充对齐方式，会一起填充。 <ul><li>只能添加整体值，不能添加局部值。</li><li>该列不会被加宽到“最适合”填充值</li><li>如果附加的值的附加项超出了单元格左/右边缘的边界，不要附加该值的附加项。</li><li>单元格的显示值是被填充的，而不是底层的原始数字。</li></ul></li><li><strong>JUSTIFY</strong>：水平对齐对齐（左右齐平）。对于每一行文本，将单元格中换行文本的每一行左右对齐（最后一行除外）。如果单元格中没有单行文本进行换行，则文本不对齐。</li><li><strong>CENTER_SELECTION</strong>：选择居中方式。在多个单元格之间居中。</li><li><strong>DISTRIBUTED</strong>：分布式对齐。表示单元格内每行文本中的每个“单词”均匀分布在单元格的宽度上，左右边距同宽。当有设置缩进值时，单元格的左右两边都由缩进值填充。</li></ul><h3 id="垂直方向-verticalalignment-枚举" tabindex="-1">垂直方向（<code>VerticalAlignment</code> 枚举） <a class="header-anchor" href="#垂直方向-verticalalignment-枚举" aria-label="Permalink to &quot;垂直方向（\`VerticalAlignment\` 枚举）&quot;">​</a></h3><ul><li><strong>TOP</strong>：向上对齐。</li><li><strong>CENTER</strong>：居中对齐。以单元格高度为中心。</li><li><strong>BOTTOM</strong>：底部对齐。一般为默认值。</li><li><strong>JUSTIFY</strong>：</li><li><strong>DISTRIBUTED</strong>：分布对齐。 当文本方向为水平时：第一行文本和上边缘齐平，最后一样文本和下边缘齐平，其余每一行文本均匀分布在单元格的高度上。如果是单行文本，则居中展示。 当文本方向为垂直时：每行文本中的第一个单词与单元格的上边缘齐平，一行文本的最后一个单词与单元格的下边缘齐平，并且一行文本从上到下均匀分布。如果只有该行一个单位，则居中展示。</li></ul><h2 id="边框" tabindex="-1">边框 <a class="header-anchor" href="#边框" aria-label="Permalink to &quot;边框&quot;">​</a></h2><p>设置单元格的边框样式、颜色</p><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">CellStyle style </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wb.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBorderBottom</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BorderStyle.THIN);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBottomBorderColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(IndexedColors.BLACK.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBorderLeft</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BorderStyle.THIN);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setLeftBorderColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(IndexedColors.GREEN.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBorderRight</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BorderStyle.THIN);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setRightBorderColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(IndexedColors.BLUE.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setBorderTop</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(BorderStyle.MEDIUM_DASHED);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">style.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setTopBorderColor</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(IndexedColors.BLACK.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">getIndex</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">());</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cell.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCellStyle</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(style);</span></span></code></pre></div><h3 id="边框样式-borderstyle" tabindex="-1">边框样式（<code>BorderStyle</code>） <a class="header-anchor" href="#边框样式-borderstyle" aria-label="Permalink to &quot;边框样式（\`BorderStyle\`）&quot;">​</a></h3><p>取值查看枚举类 <code>org.apache.poi.ss.usermodel.BorderStyle</code></p><ul><li><strong>NONE</strong>：无样式。默认值</li><li><strong>THIN</strong>：细实线。</li><li><strong>MEDIUM</strong>：中等实线。</li><li><strong>DASHED</strong>：虚线。</li><li><strong>DOTTED</strong>：点线。</li><li><strong>THICK</strong>：粗实线。</li><li><strong>DOUBLE</strong>：双实线。</li><li><strong>HAIR</strong>：细细线。</li><li><strong>MEDIUM_DASHED</strong>：中等虚线。</li><li><strong>DASH_DOT</strong>：点虚线。</li><li><strong>MEDIUM_DASH_DOT</strong>：中等点虚线。</li><li><strong>DASH_DOT_DOT</strong>：点点虚线。</li><li><strong>MEDIUM_DASH_DOT_DOT</strong>：中等点点虚线。</li><li><strong>SLANTED_DASH_DOT</strong>：斜点虚线。</li></ul><h3 id="边框颜色-indexedcolors" tabindex="-1">边框颜色（<code>IndexedColors</code>） <a class="header-anchor" href="#边框颜色-indexedcolors" aria-label="Permalink to &quot;边框颜色（\`IndexedColors\`）&quot;">​</a></h3><p>取值查看枚举类 <code>org.apache.poi.ss.usermodel.IndexedColors</code></p><h2 id="合并单元格" tabindex="-1">合并单元格 <a class="header-anchor" href="#合并单元格" aria-label="Permalink to &quot;合并单元格&quot;">​</a></h2><div class="language-java vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">java</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Workbook wb </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> HSSFWorkbook</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">();</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Sheet sheet </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> wb.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createSheet</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;new sheet&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Row row </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> sheet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createRow</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Cell cell </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> row.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">createCell</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">cell.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">setCellValue</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;合并单元格&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">sheet.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">addMergedRegion</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">new</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> CellRangeAddress</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">));</span></span></code></pre></div><p><code>CellRangeAddress</code> 对象的构造参数:<br> 第一个参数：表示合并的单元格的开始行数，起始为0<br> 第二个参数：表示合并的单元格的结束行数，起始为0<br> 第三个参数：表示合并的单元格的开始列数，起始为0<br> 第四个参数：表示合并的单元格的结束列数，起始为0</p>`,25)]))}const o=i(h,[["render",t]]);export{g as __pageData,o as default};

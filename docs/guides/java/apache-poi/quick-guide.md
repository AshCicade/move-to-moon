## 创建 Workbook
```java
Workbook wb = new HSSFWorkbook();
// 或 
Workbook wb = new XSSFWorkbook();
```

## 创建 Sheet
```java
Workbook wb = new HSSFWorkbook();  // 或 new XSSFWorkbook();

// 方式一：
Sheet sheet1 = wb.createSheet("first sheet");

// 方式二：
String safeName = WorkbookUtil.createSafeSheetName("[O'Brien's sales*?]"); // 实际名称：" O'Brien's sales   "
Sheet sheet2 = wb.createSheet(safeName);
```
::: tip
sheet 的名称 **不能超过31个字符**，并且不能包含以下任何一个字符：``0x0000（NULL值）``，``0x0003（回车）``，``:``，``\``，``*``，``?``，``/``，``[``，``]``。可以使用 `org.apache.poi.ss.util.WorkbookUtil#createSafeSheetName(String nameProposal)` 创建有效名称，此方法会将 `nameProposal` 中的无效字符替换为空格 `' '`。
:::

## 创建 Cells（单元格）
```java

Workbook wb = new HSSFWorkbook();
//Workbook wb = new XSSFWorkbook();
CreationHelper createHelper = wb.getCreationHelper();
Sheet sheet = wb.createSheet("new sheet");
// 创建行，并为其创建单元格，行数从0开始
Row row = sheet.createRow(0); // 第一行
// 创建单元格，并设置值
Cell cell = row.createCell(0); // 第1个单元格
cell.setCellValue(1);
row.createCell(1).setCellValue(1.2); // 第2个单元格
row.createCell(2).setCellValue(createHelper.createRichTextString("This is a string")); // 第3个单元格
row.createCell(3).setCellValue(true); // 第4个单元格

```

### 单元格数据类型设置

## 对齐选项
```java
public static void main(String[] args) throws Exception {
    Workbook wb = new XSSFWorkbook();
    Sheet sheet = wb.createSheet();
    Row row = sheet.createRow(0);
    Cell cell = row.createCell(0);
    cell.setCellValue("Align It");
    CellStyle cellStyle = wb.createCellStyle();
    // 水平居中
    cellStyle.setAlignment(HorizontalAlignment.CENTER);
    // 垂直居中
    cellStyle.setVerticalAlignment(VerticalAlignment.CENTER);
    cell.setCellStyle(cellStyle);
}

```
### 水平方向（`HorizontalAlignment` 枚举）
- **GENERAL**：一般对齐方式。文本数据是左对齐的。数字、日期和时间右对齐。布尔类型居中。
- **LEFT**：左对齐。即使在从右到左的模式下，水平对齐方式也是左对齐的。在单元格的左边缘对齐内容。如果指定了缩进量，则单元格的内容会从左侧缩进指定数量的字符空格。字符空格基于工作簿的默认字体和字体大小。
- **CENTER**：居中对齐。
- **RIGHT**：右对齐。单元格的内容对齐在单元格的右边缘。
- **FILL**：填充对齐。表示单元格的值应该填充整个单元格的宽度。如果右边的空白单元格也是填充对齐方式，会一起填充。
  - 只能添加整体值，不能添加局部值。
  - 该列不会被加宽到“最适合”填充值
  - 如果附加的值的附加项超出了单元格左/右边缘的边界，不要附加该值的附加项。
  - 单元格的显示值是被填充的，而不是底层的原始数字。
- **JUSTIFY**：水平对齐对齐（左右齐平）。对于每一行文本，将单元格中换行文本的每一行左右对齐（最后一行除外）。如果单元格中没有单行文本进行换行，则文本不对齐。
- **CENTER_SELECTION**：选择居中方式。在多个单元格之间居中。
- **DISTRIBUTED**：分布式对齐。表示单元格内每行文本中的每个“单词”均匀分布在单元格的宽度上，左右边距同宽。当有设置缩进值时，单元格的左右两边都由缩进值填充。

### 垂直方向（`VerticalAlignment` 枚举）
- **TOP**：向上对齐。
- **CENTER**：居中对齐。以单元格高度为中心。
- **BOTTOM**：底部对齐。一般为默认值。
- **JUSTIFY**：
- **DISTRIBUTED**：分布对齐。
  当文本方向为水平时：第一行文本和上边缘齐平，最后一样文本和下边缘齐平，其余每一行文本均匀分布在单元格的高度上。如果是单行文本，则居中展示。
  当文本方向为垂直时：每行文本中的第一个单词与单元格的上边缘齐平，一行文本的最后一个单词与单元格的下边缘齐平，并且一行文本从上到下均匀分布。如果只有该行一个单位，则居中展示。

## 边框
设置单元格的边框样式、颜色
```java
CellStyle style = wb.createCellStyle();
style.setBorderBottom(BorderStyle.THIN);
style.setBottomBorderColor(IndexedColors.BLACK.getIndex());
style.setBorderLeft(BorderStyle.THIN);
style.setLeftBorderColor(IndexedColors.GREEN.getIndex());
style.setBorderRight(BorderStyle.THIN);
style.setRightBorderColor(IndexedColors.BLUE.getIndex());
style.setBorderTop(BorderStyle.MEDIUM_DASHED);
style.setTopBorderColor(IndexedColors.BLACK.getIndex());
cell.setCellStyle(style);
```

### 边框样式（`BorderStyle`）
取值查看枚举类 `org.apache.poi.ss.usermodel.BorderStyle`
- **NONE**：无样式。默认值
- **THIN**：细实线。
- **MEDIUM**：中等实线。
- **DASHED**：虚线。
- **DOTTED**：点线。
- **THICK**：粗实线。
- **DOUBLE**：双实线。
- **HAIR**：细细线。
- **MEDIUM_DASHED**：中等虚线。
- **DASH_DOT**：点虚线。
- **MEDIUM_DASH_DOT**：中等点虚线。
- **DASH_DOT_DOT**：点点虚线。
- **MEDIUM_DASH_DOT_DOT**：中等点点虚线。
- **SLANTED_DASH_DOT**：斜点虚线。

### 边框颜色（`IndexedColors`）
取值查看枚举类 `org.apache.poi.ss.usermodel.IndexedColors`


## 合并单元格
```java
Workbook wb = new HSSFWorkbook();
Sheet sheet = wb.createSheet("new sheet");
Row row = sheet.createRow(1);
Cell cell = row.createCell(1);
cell.setCellValue("合并单元格");
sheet.addMergedRegion(new CellRangeAddress(1, 1, 1, 2));
```
`CellRangeAddress` 对象的构造参数:   
第一个参数：表示合并的单元格的开始行数，起始为0  
第二个参数：表示合并的单元格的结束行数，起始为0  
第三个参数：表示合并的单元格的开始列数，起始为0  
第四个参数：表示合并的单元格的结束列数，起始为0  


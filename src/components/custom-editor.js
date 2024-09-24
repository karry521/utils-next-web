import { CKEditor } from '@ckeditor/ckeditor5-react'
import {
    ClassicEditor,
    AccessibilityHelp,
    Autoformat,
    AutoImage,
    AutoLink,
    Autosave,
    Bold,
    CKBox,
    CKBoxImageEdit,
    CloudServices,
    Code,
    CodeBlock,
    Essentials,
    GeneralHtmlSupport,
    Heading,
    HtmlComment,
    HtmlEmbed,
    ImageBlock,
    ImageCaption,
    ImageInline,
    ImageInsert,
    ImageInsertViaUrl,
    ImageResize,
    ImageStyle,
    ImageTextAlternative,
    ImageToolbar,
    ImageUpload,
    Italic,
    Link,
    LinkImage,
    Paragraph,
    PasteFromOffice,
    PictureEditing,
    SelectAll,
    ShowBlocks,
    SourceEditing,
    Table,
    TableCaption,
    TableCellProperties,
    TableColumnResize,
    TableProperties,
    TableToolbar,
    TextTransformation,
    Undo
} from 'ckeditor5'
import { PasteFromOfficeEnhanced } from 'ckeditor5-premium-features'

import 'ckeditor5/ckeditor5.css'
import 'ckeditor5-premium-features/ckeditor5-premium-features.css'

function CustomEditor({ editorRef }) {
    return (
        <CKEditor
            editor={ClassicEditor}
            onReady={(editor) => editorRef.current = editor}
            config={{
                toolbar: {
                    items: [
                        'undo',
                        'redo',
                        '|',
                        'sourceEditing',
                        'showBlocks',
                        '|',
                        'heading',
                        '|',
                        'bold',
                        'italic',
                        'code',
                        '|',
                        'link',
                        'insertImage',
                        'ckbox',
                        'insertTable',
                        'codeBlock',
                        'htmlEmbed',
                        '|',
                        'bulletedList',
                        'numberedList'
                    ],
                    shouldNotGroupWhenFull: false
                },
                plugins: [
                    AccessibilityHelp,
                    Autoformat,
                    AutoImage,
                    AutoLink,
                    Autosave,
                    Bold,
                    CKBox,
                    CKBoxImageEdit,
                    CloudServices,
                    Code,
                    CodeBlock,
                    Essentials,
                    GeneralHtmlSupport,
                    Heading,
                    HtmlComment,
                    HtmlEmbed,
                    ImageBlock,
                    ImageCaption,
                    ImageInline,
                    ImageInsert,
                    ImageInsertViaUrl,
                    ImageResize,
                    ImageStyle,
                    ImageTextAlternative,
                    ImageToolbar,
                    ImageUpload,
                    Italic,
                    Link,
                    LinkImage,
                    Paragraph,
                    PasteFromOffice,
                    PasteFromOfficeEnhanced,
                    PictureEditing,
                    SelectAll,
                    ShowBlocks,
                    SourceEditing,
                    Table,
                    TableCaption,
                    TableCellProperties,
                    TableColumnResize,
                    TableProperties,
                    TableToolbar,
                    TextTransformation,
                    Undo
                ],
                table: {
                    contentToolbar: [
                        'tableColumn',       // 插入或删除列
                        'tableRow',          // 插入或删除行
                        'mergeTableCells',   // 合并单元格
                        'tableProperties',   // 表格属性设置
                        'tableCellProperties' // 单元格属性设置
                    ],
                },
                licenseKey: 'NGIwMXlzL2lpWW85cXAwcytJQ2FLWmYvOFByZCsvdE4ybGNwZ1p5Zldtc1BvTU5QZ1BQZDc1WlNCTjRyOWc9PS1NakF5TkRFd01UST0=',
                mention: {
                    // Mention configuration
                },
                initialData: ''
            }}
        />
    )
}

export default CustomEditor

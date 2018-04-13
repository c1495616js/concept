import $ from 'jquery'
import lang from '@/vendors/js/zh-Tw.json'

const dfContent = `
<a href="javascript:void(0)" class="btn btn-sm btn-info" role="button" style="margin-right: 5px;"><i class="fa fa-edit fa-lg"></i></a>
<a href="#deleteModal" role="button" class="btn btn-sm btn-danger" data-toggle="modal" style="margin-right: 5px;"><i class="fa fa-trash fa-lg"></i></a>
`

export { dfContent }

export default function () {
  const sDom = `<'dt-toolbar'<'col-sm-12 col-xs-12'p>r>+
          <'t-box'
          t
          >
          <'dt-toolbar-footer'<'col-sm-6 col-xs-12'i><'col-xs-12 col-sm-6 hidden-xs'l>>`

  $.extend(true, $.fn.DataTable.defaults, {
    sDom: sDom,
    processing: true,
    serverSide: false,
    destroy: true,
    language: lang
  })
}

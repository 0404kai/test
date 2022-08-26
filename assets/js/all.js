"use strict";

$(function () {
  $('.arrow').click(function (e) {
    e.preventDefault();
    $('.up-arrow').toggleClass('d-none');
    $('.down-arrow').toggleClass('d-none');
  });
});
"use strict";

$(function () {
  if (location.pathname == '../../index.html') {
    $('#assignment').addClass('list-active');
  } else if (location.pathname == '../../admin.html') {
    $('#admin').addClass('list-active');
  }
});
console.log(location.pathname);
"use strict";

CKEDITOR.ClassicEditor.create(document.getElementById("editor"), {
  toolbar: {
    items: ["heading", "bold", "italic", "bulletedList", "numberedList", "uploadImage", "link", "code"],
    shouldNotGroupWhenFull: true
  },
  list: {
    properties: {
      styles: true,
      startIndex: true,
      reversed: true
    }
  },
  heading: {
    options: [{
      model: "paragraph",
      title: "Paragraph",
      "class": "ck-heading_paragraph"
    }, {
      model: "heading1",
      view: "h1",
      title: "Heading 1",
      "class": "ck-heading_heading1"
    }, {
      model: "heading2",
      view: "h2",
      title: "Heading 2",
      "class": "ck-heading_heading2"
    }, {
      model: "heading3",
      view: "h3",
      title: "Heading 3",
      "class": "ck-heading_heading3"
    }, {
      model: "heading4",
      view: "h4",
      title: "Heading 4",
      "class": "ck-heading_heading4"
    }, {
      model: "heading5",
      view: "h5",
      title: "Heading 5",
      "class": "ck-heading_heading5"
    }, {
      model: "heading6",
      view: "h6",
      title: "Heading 6",
      "class": "ck-heading_heading6"
    }]
  },
  placeholder: "Reply an answer…",
  link: {
    decorators: {
      addTargetToExternalLinks: true,
      defaultProtocol: "https://",
      toggleDownloadable: {
        mode: "manual",
        label: "Downloadable",
        attributes: {
          download: "file"
        }
      }
    }
  },
  removePlugins: [// These two are commercial, but you can try them out without registering to a trial.
  // 'ExportPdf',
  // 'ExportWord',
  "CKBox", "CKFinder", "EasyImage", // This sample uses the Base64UploadAdapter to handle image uploads as it requires no configuration.
  // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/base64-upload-adapter.html
  // Storing images as Base64 is usually a very bad idea.
  // Replace it on production website with other solutions:
  // https://ckeditor.com/docs/ckeditor5/latest/features/images/image-upload/image-upload.html
  // 'Base64UploadAdapter',
  "RealTimeCollaborativeComments", "RealTimeCollaborativeTrackChanges", "RealTimeCollaborativeRevisionHistory", "PresenceList", "Comments", "TrackChanges", "TrackChangesData", "RevisionHistory", "Pagination", "WProofreader", // Careful, with the Mathtype plugin CKEditor will not load when loading this sample
  // from a local file system (file://) - load this site via HTTP server if you enable MathType
  "MathType"]
});
"use strict";

$(function () {
  $(".reply").click(function (e) {
    e.preventDefault();
    $(".answer").addClass('d-none');
    $('.editor').removeClass('d-none');
    $('.mark').addClass('d-none');
    $('.cancel').removeClass('d-none');
  });
  $(".cancel").click(function (e) {
    e.preventDefault();
    $(".answer").removeClass('d-none');
    $('.editor').addClass('d-none');
    $('.cancel').addClass('d-none');
    $('.mark').removeClass('d-none');
  });
});
//# sourceMappingURL=all.js.map

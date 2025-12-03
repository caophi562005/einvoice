module.exports = {
  // Kế thừa rules cơ bản từ bộ quy tắc Conventional Commits
  extends: ['@commitlint/config-conventional'],

  // Custom parser để định nghĩa format commit header
  parserPreset: {
    parserOpts: {
      // Regex parse commit message
      // Format: <type>/<scope>: <subject>
      // Ví dụ: feat/auth: thêm chức năng đăng nhập với JWT
      headerPattern: /^(\w+)\/#(\w+):\s(.*)$/,
      // Ánh xạ các group trong regex vào field của commitlint
      headerCorrespondence: ['type', 'scope', 'subject'],
    },
  },

  // Các rules để enforce commit message
  rules: {
    // Chỉ cho phép type thuộc danh sách này
    // feat = thêm chức năng
    // fix = sửa bug
    // docs = tài liệu
    // style = format code
    // refactor = tối ưu
    // test = test code
    // chore = việc vặt
    // revert = rollback commit
    'type-enum': [
      2,
      'always',
      ['feat', 'fix', 'docs', 'style', 'refactor', 'test', 'chore', 'revert'],
    ],

    // Header (toàn bộ commit message dòng đầu) tối thiểu 10 ký tự
    'header-min-length': [2, 'always', 10],

    // Header tối đa 160 ký tự
    'header-max-length': [2, 'always', 160],

    // Body (nội dung chi tiết commit) mỗi dòng tối đa 120 ký tự
    'body-max-line-length': [2, 'always', 120],

    // Subject (phần mô tả ngắn) không bị ép theo style nào
    // 0 = off → có thể viết hoa/thường tùy ý
    'subject-case': [
      0,
      'never',
      ['sentence-case', 'start-case', 'pascal-case', 'upper-case'],
    ],
  },
};

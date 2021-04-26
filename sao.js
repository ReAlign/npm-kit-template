module.exports = {
  prompts: {
    packageName: {
      message: `package name:`,
      default: ':folderName:',
    },
    description: {
      message: `Description:`,
      default: '',
    },
    libraryName: {
      message: `library name:`,
      default: 'main',
    }
  },
  installDependencies: true,
};
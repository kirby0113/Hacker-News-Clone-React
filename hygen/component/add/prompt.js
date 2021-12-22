module.exports = {
  prompt: ({ inquirer }) => {
    const questions = [
      {
        type: 'input',
        name: 'name',
        message: '名前は何?',
      },
      {
        type: 'select',
        name: 'category',
        message: 'どちらを生成する？',
        choices: ['components', 'pages'],
      },
    ];
    return inquirer.prompt(questions).then((answers) => {
      const { name, category } = answers;
      return { name, category };
    });
  },
};

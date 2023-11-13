#! /usr/bin/env node

import figlet from 'figlet';
import chalk from 'chalk';
import { Command } from 'commander';
import { createProject } from '../utils/create.js';

const program = new Command();

program.name('mars').description('new project').version('1.0.0');

program
  .command('create <name>')
  .description('create a new project')
  .action(createProject)
  .option('-f, --force', 'force create');

program.on('--help', () => {
  console.log(
    '\r\n' +
      chalk.white.bgBlueBright.bold(
        figlet.textSync('MARS-CLI', {
          font: 'Standard',
          horizontalLayout: 'default',
          verticalLayout: 'default',
          width: 80,
          whitespaceBreak: true,
        }),
      ),
  );
  console.log(
    `\r\nRun ${chalk.cyan(`mars <command> --help`)} for detailed usage of given command\r\n`,
  );
});

program.parse(process.argv);

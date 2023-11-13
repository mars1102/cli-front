/**
 * @description 创建项目
 * @author Mars
 */
import path from 'path';
import fs from 'fs-extra';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * command create
 * @param name
 * @param options
 */
async function createProject(name, options) {
  const cwd = process.cwd();
  const targetPath = path.join(cwd, name);

  // 目录是否存在
  if (fs.pathExistsSync(targetPath)) {
    console.log('目录已存在');
  } else {
    // 目录不存在正常创建
    await downloadTemplate(name);
  }
}

/**
 * 下载模版
 * @param name
 */
async function downloadTemplate(name) {
  // const spinner = ora('正在下载模版...');
  // spinner.start();

  // 本地存放地址
  const tmp = path.join(process.cwd(), name);

  await copyFolder(path.join(__dirname, '..', 'templates/template-react'), tmp);
}

async function copyFolder(sourceFolder, targetFolder) {
  try {
    await fs.copy(sourceFolder, targetFolder);
    console.log('文件夹内容复制成功！');
  } catch (err) {
    console.error('文件夹内容复制失败:', err);
  }
}

export { createProject };

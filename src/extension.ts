'use strict';
// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';
import { Main } from './Main';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
    context.subscriptions.push(Main.watch());
}

// this method is called when your extension is deactivated
export function deactivate() {
}

/*
 * 选择图片
    * 手动选择
        * 弹出文件选择框
    * 随机选择
    * img1
    * img2
    * img3
 * 添加目录
    * 弹出文件目录选择框
 * 透明度
    * 输入数值（0.00-1.00）
 * 手动输入/https
    * 输入图片地址支持本地路径、https路径
 * 关闭/开启背景
 * 
*/
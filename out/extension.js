"use strict";
/*---------------------------------------------------------
 * Copyright (C) Microsoft Corporation. All rights reserved.
 *--------------------------------------------------------*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.activate = void 0;
const vscode = require("vscode");
function activate(context) {
    // Get Current Date
    const currentDate = new Date().toLocaleDateString('en-SG', {
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
    });
    const provider1 = vscode.languages.registerCompletionItemProvider(['c', 'cpp', 'cs'], {
        provideCompletionItems(document, position, token, context) {
            // File Comment Header Auto Completion
            const fileCommentCompletion = new vscode.CompletionItem('Documentation: File Level');
            fileCommentCompletion.insertText = new vscode.SnippetString('*!\n@file       @todo\n@author     @todo\n@course     @todo\n@section    @todo\n@assignment @todo\n@date       ' + currentDate + '\n@brief      @todo\n\n*//*__________________________________________________________________________*/\n\n');
            fileCommentCompletion.documentation = new vscode.MarkdownString("Inserts the file level documentation header.");
            // Function Comment Header Auto Completion
            const functionCommentCompletion = new vscode.CompletionItem('Documentation: Function Level');
            functionCommentCompletion.insertText = new vscode.SnippetString('*!\n@brief  @todo\n\n@param  @todo\n@return none\n*//*__________________________________________________________________________*/');
            functionCommentCompletion.documentation = new vscode.MarkdownString("Inserts the function level documentation header.");
            // return all completion items as array
            return [
                fileCommentCompletion,
                functionCommentCompletion
            ];
        }
    }, '/');
    context.subscriptions.push(provider1);
}
exports.activate = activate;
//# sourceMappingURL=extension.js.map
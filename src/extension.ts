import * as vscode from "vscode";

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "go-raw-sql-syntax" is now active!'
  );

  // let disposable = vscode.languages.registerDocumentSymbolProvider("go", {
  //   provideDocumentSymbols: (document, token) => {
  //     // Add your symbol detection logic here if needed
  //     return [];
  //   },
  // });

  // context.subscriptions.push(disposable);
}

// This method is called when your extension is deactivated
export function deactivate() {}

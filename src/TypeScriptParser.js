import * as ts from 'typescript';

const scanner = ts.createScanner(ts.ScriptTarget.Latest, /*skipTrivia*/ false);

// Get doc comment tokens
export function parse(code) {

  if (typeof code !== 'string') {
    throw Error('code parameter should be a string');
  }

  // Initialize scanner 
  scanner.setText(code);
  scanner.setOnError((message, length) => {
    console.error(message);
  });
  scanner.setScriptTarget(ts.ScriptTarget.ES5);
  scanner.setLanguageVariant(ts.LanguageVariant.Standard);

  // Start the scanning
  let next, token = scanner.scan();
  const comments = [];

  while (token != ts.SyntaxKind.EndOfFileToken) {
    const start = scanner.getStartPos();
    next = scanner.scan();
    const end = scanner.getStartPos();

    if (token === ts.SyntaxKind.MultiLineCommentTrivia && code.substr(start, 3) === '/**') {
      comments.push({
        start: start,
        end: end,
        text: code.substring(start, end)
      });
    }
    token = next;
  }

  return comments;
}

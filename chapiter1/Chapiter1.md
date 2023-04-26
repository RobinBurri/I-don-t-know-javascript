# The Web Rules Everything About (JS)

This chapter explains that the web is the most important environment for
JavaScript (JS), even though the array of environments that run JS is constantly
expanding. The JS defined in the specification and the JS that runs in
browser-based JS engines is mostly the same, but there are some differences to
consider. Sometimes TC39, the committee responsible for the standardization of
JS, will backtrack and choose to conform the specification to the reality of the
web due to historical mismatches between the specification and the behavior of
JS engines in the web.

In other cases, TC39 decides to stick to the specification, and for these cases,
the "Additional ECMAScript Features for Web Browsers" appendix is included in
the JS specification. This appendix covers exceptions that are allowed only for
web JS and details out known mismatches between the official JS specification
and the reality of JS on the web. It's essential to avoid these constructs to be
future safe and adhere to the JS specification whenever possible.

# Not All (Web) JS...

This chapter discusses how not all JavaScript (JS) programs are the same, and it
depends on the environment in which the code is running. For example, the
alert() function is not included in the JS specification, but it is part of all
web JS environments. Similarly, other JS-looking APIs like fetch(),
getCurrentLocation(), and getUserMedia() are web APIs that are specific to web
JS environments. On the other hand, in Node.js, there are built-in modules like
fs.write() that provide access to a range of API methods.

Functions and object methods like alert() and console.log() are not defined by
JS, but they look like JS and follow JS syntax rules. The behavior behind them
is controlled by the environment running the JS engine. The cross-browser
differences often cited as inconsistencies in JS are actually due to differences
in how the environment behaviors work rather than how the JS itself works.

In summary, alert() and other functions like it are part of the web JS
environment but not part of the official JS specification.

# It's Not Always JS

The console/REPL in a browser's Developer Tools (or Node) may appear to be a
straightforward JS environment, but it is not. These tools prioritize developer
experience (DX) and convenience over adhering strictly to JS behavior.
Therefore, the console may have quirks that act as "gotchas" if treated as a
pure JS environment. The purpose of the console is to make it easy for
developers to quickly enter a few lines of code and see the results immediately,
not to handle code exactly the same way the JS engine handles a .js file.

Various quirks may exist in the console environment, and they can change from
browser to browser or over time. Examples include whether a var or function
declaration in the top-level "global scope" actually creates a real global
variable and whether "use strict"; on one line-entry enables strict mode for the
rest of that console session.

Therefore, it's unreasonable to expect the console to handle both DX and exact
JS semantics equally. Instead, it should be thought of as a "JS-friendly"
environment, useful in its own right. To understand exact to-the-letter JS
semantics, one should read the JS specification.

# Many Faces

In programming languages, a paradigm is a broad approach to structuring code,
with variations in style and form within it. Paradigms include procedural,
object-oriented, and functional styles. They are orientations that guide how
programmers approach problems and solutions and structure their code. Some
languages are heavily slanted toward one paradigm, but many also support code
patterns from different paradigms, making them "multi-paradigm languages".
JavaScript is a multi-paradigm language that allows developers to write
procedural, object-oriented, or functional style code and make those decisions
on a line-by-line basis.

# Backwards & Forwards
What is the main principle of backwards compatibility in JavaScript and what are the implications of this principle?

The main principle of backwards compatibility in JavaScript is that once a piece of code is accepted as valid JS, there will not be a future change to the language that causes that code to become invalid. This means that code written in 1995, for example, should still work today. The goal of this principle is to allow JS developers to write code with confidence that their code won't stop working unpredictably because of a browser update. This principle also makes the decision to choose JS for a program a wise and safe investment for years into the future.

However, maintaining backwards compatibility, stretched out across almost 25 years of the language's history, creates an enormous burden and a whole slew of unique challenges. It creates a very high bar to including changing or extending the language, as any decision becomes effectively permanent. Once a feature is added to JS, it can't be taken out because it might break programs, even if the TC39 committee would really like to remove it. There have been some backwards-incompatible changes to JS, but TC39 is extremely cautious in doing so. They study existing code on the web (via browser data gathering) to estimate the impact of such breakage, and browsers ultimately decide and vote on whether they're willing to take the heat from users for a very small-scale breakage weighed against the benefits of fixing or improving some aspect of the language for many more sites (and users).

# What's in an Interpretation?
The paragraph discusses whether JavaScript is an interpreted language or a compiled language. Historically, interpreted languages and scripting languages have been regarded as inferior to compiled languages. The paragraph explains that the real reason it matters to have a clear picture on whether JS is interpreted or compiled relates to the nature of how errors are handled. Historically, interpreted languages were executed in a top-down and line-by-line fashion. This means that an error on line 5 of a program won't be discovered until lines 1 through 4 have already executed. The paragraph explains that JS source code is parsed before it is executed. It is then converted to an optimized binary form and executed, producing a binary byte code that is handed to the "JS virtual machine" to execute. The JS engine can employ multiple passes of JIT processing/optimization on the generated code. The paragraph concludes that JavaScript is a parsed language that is compiled in spirit.

# Web Assembly (WASM)
The development of JavaScript has been driven by the need for better performance, both in terms of parsing/compiling and executing code quickly. ASM.js was introduced as a way to optimize code for the JS engine by using a subset of JS that included certain typing information. However, it was not intended for developers to write, but rather for tooling to automatically insert annotations into code transpiled from other languages. Web Assembly (WASM) was later introduced as a representation format that could be processed more efficiently by the JS engine, allowing non-JS programs to run in the browser. Unlike ASM.js, WASM is represented in a form that is entirely unlike JS, more akin to Assembly. It is a binary-packed program that is processed ahead of time (AOT), with very minimal processing needed by the JS engine. One motivation for WASM was to improve performance, but it is also intended to bring more parity for non-JS languages to the web platform. Additionally, WASM is evolving to become a cross-platform virtual machine (VM) that can be run in different system environments. Despite this, WASM is not intended to replace JS, but rather to augment what the web (including JS) can accomplish.

# Strictly Speaking
The article discusses the benefits and challenges of using strict mode in JavaScript. While it was added to encourage better programming practices in ES5, it is still not the default for JS programmers. Strict mode helps collaboration on code and avoids problematic mistakes that slip by in non-strict mode. Most strict mode controls are in the form of early errors and are thrown at compile time. Strict mode is switched on per file or per-function scope. Even a stray semicolon before the strict mode pragma can render it useless. Strict mode is not likely to become the default in the future due to compatibility concerns, but most transpiled code ends up in strict mode, and new JS code is written using the ES6 module format, which assumes strict mode. Therefore, strict mode is largely the de facto default.
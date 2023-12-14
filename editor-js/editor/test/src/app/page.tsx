"use client";
import dynamic from "next/dynamic";

const EditorJsComponent = dynamic(() => import("./EditorJsComponent"), {
  ssr: false,
});

const data = {
  time: 1702525930926,
  blocks: [
    {
      id: "YtMNC46PDw",
      type: "heading",
      data: {
        text: "In Nutshell",
        level: 2,
        alignment: "left",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "e1QTy6O-_J",
      type: "paragraph",
      data: {
        text: 'Java\'s&nbsp;<code class="inline-code">Optional</code> enforces programmers to check <code class="inline-code">nullability</code> before accessing the object, which reduces the chance of&nbsp;<code class="inline-code">NullPointerException</code>. It was introduced in 2014 to allow developers to represent the empty state. In simple words, <code class="inline-code">Optional</code> is a container for the object, which has two states empty or present.&nbsp;',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "YNpXGLnSVo",
      type: "heading",
      data: {
        text: "Terror of NullPointerException!",
        level: 2,
        alignment: "left",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "jm85ADfr-w",
      type: "paragraph",
      data: {
        text: '<code class="inline-code">NullPointerException</code> is a very common exception that can be caused in our code or any library, package, or tool that we are using. Then there is no other way than debugging for hours/days. You can check this <a href="https://stackoverflow.com/search?q=NullPointerException">StackOverFlow</a> link to understand the commonality of <code class="inline-code">NullPointerException</code>.&nbsp;',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "b7ZgaSsIcx",
      type: "paragraph",
      data: {
        text: "Below is a quick snapshot of the above link!",
      },
      tunes: {
        textVariantTune: "details",
      },
    },
    {
      id: "zt_r6cJfmA",
      type: "image",
      data: {
        file: {
          url: "http://res.cloudinary.com/dv5whhwtz/image/upload/v1700192625/%40dsabyte/jlh4encrdz7lzppf9yft.png",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "HBB0Yam8lz",
      type: "heading",
      data: {
        text: "What actually is Java Optional?",
        level: 2,
        alignment: "left",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "P3x1IKnFCr",
      type: "paragraph",
      data: {
        text: "Java's Optional is a container for Object and just like any other real-life container it can have items or it can be empty.&nbsp;",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "11nJE1os3M",
      type: "image",
      data: {
        file: {
          url: "http://res.cloudinary.com/dv5whhwtz/image/upload/v1700193861/%40dsabyte/xa8z3fg6tge1amwuylsr.jpg",
        },
        caption: "",
        withBorder: false,
        stretched: false,
        withBackground: false,
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "MKGWRAAQHM",
      type: "paragraph",
      data: {
        text: 'Consider the below user class which has a single property <code class="inline-code">name</code> along with getter/setter.',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "bkWZHN8yDj",
      type: "code",
      data: {
        code: "class User {\n  private String name;\n\n  public String getName() {\n    return name;\n  }\n\n  public User setName(String name) {\n    this.name = name;\n    return this;\n  }\n}",
        language: "java",
        caption: "User Class",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "2cf6nN1QQ7",
      type: "paragraph",
      data: {
        text: "Consider the below Main class which is creating and accessing the user.&nbsp;",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "yVQ83m2wXB",
      type: "code",
      data: {
        code: 'public class DsaByteOptionalDemo {\n  // simulate a real world scenario of database which can have user or can\'t\n  // isUserPresentInDB will return true for 50% and false for another 50%\n  private static boolean isUserPresentInDB() {\n    return Math.random() < 0.5;\n  }\n\n  private static User getUser() {\n    if (isUserPresentInDB()) {\n      return new User().setName("@dsabyte");\n    }\n\n    return null;\n  }\n\n  public static void main(String[] args) {\n    User user = getUser();\n    System.out.println("User: " + user.getName());\n  }\n}',
        language: "java",
        caption: "",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "8aBZwYfeBu",
      type: "paragraph",
      data: {
        text: 'It\'s clear that the <code class="inline-code">getUser</code> method can return <code class="inline-code">null</code> 50% of the time and we\'ll get a <code class="inline-code">NullPointerException</code> for accessing&nbsp;<code class="inline-code">user.getName()</code>.&nbsp; We can add a null check before accessing the user name in order to avoid <code class="inline-code">NullPointerException</code>.&nbsp;',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "EQcOFfpPB-",
      type: "code",
      data: {
        code: '  public static void main(String[] args) {\n    User user = getUser();\n    \n    if(user == null){\n        return;\n    }\n    \n    System.out.println("User: " + user.getName());\n  }',
        language: "java",
        caption: "",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "8uIwuDAzJ0",
      type: "paragraph",
      data: {
        text: "Adding a null check was a great solution but it's pretty common that we can forget to add a null check which can crash our servers. It's not possible for anyone to make sure that null is always checked 100% of the time. ",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "PeF7p4574F",
      type: "paragraph",
      data: {
        text: '<a href="https://stackoverflow.com/search?q=NullPointerException">&nbsp;Here is a proof that programmers are making mistakes</a>.&nbsp;&nbsp;',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "o2LCsZEj2C",
      type: "paragraph",
      data: {
        text: 'Let\'s assume that we are using a method&nbsp;<code class="inline-code">getProducts</code> of a popular library <code class="inline-code">Ecom</code> that returns an array of products. The documentation mentioned that the method will always return an array, if there is no such product exists then the method will return an empty array.&nbsp;',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "hHAvwKFlWf",
      type: "alert",
      data: {
        type: "info",
        align: "left",
        message:
          '<code class="inline-code">Ecom</code> is an E-Commerce library',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "PDA9YujZ0o",
      type: "code",
      data: {
        code: "// here is how are we using Ecom.getProducts() in our code\npublic int getProductsCount(){\n    return Ecom.getProducts().length;\n}  \n",
        language: "java",
        caption: "Before using Optional",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "ezEixei1kq",
      type: "paragraph",
      data: {
        text: '<code class="inline-code">getProductsCount</code> method calls&nbsp;<code class="inline-code">Ecom.getProducts()</code> to get the array of products and calls <code class="inline-code">.length</code> to get the count. Since it was mentioned in the documentation that&nbsp;<code class="inline-code">Ecom.getProducts()</code> will always return an array regardless of whether any product is present or not.',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "_I-wAO_QUq",
      type: "paragraph",
      data: {
        text: 'Suppose, due to some reason,&nbsp;<code class="inline-code">Ecom.getProducts()</code> started returning <code class="inline-code">null</code>&nbsp;and&nbsp;<code class="inline-code">Ecom.getProducts().length</code> started throwing <code class="inline-code">NullPointerException</code> now.&nbsp; Since it was not handled by us our application started crashing.&nbsp;',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "iIjmcPCc4v",
      type: "paragraph",
      data: {
        text: 'Now, think that&nbsp;<code class="inline-code">Ecom.getProducts()</code> is returning <code class="inline-code">Optional</code> instead of an array and the above code would looks like.&nbsp;',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "GLfECV-dpm",
      type: "code",
      data: {
        code: "// here is how are we using Ecom.getProducts() in our code\npublic int getProductsCount(){\n    Optional<List<Product>> fetchedProducts = Ecom.getProducts();\n    if(fetchedProducts.isEmpty()){\n          return 0;\n    }\n    return fetchedProducts.get().length;\n}  \n",
        language: "java",
        caption: "After using Optional",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "qYQgV5fjc5",
      type: "paragraph",
      data: {
        text: 'Just think about how the above code is modified to handle unintentional exceptions in a much cleaner way. Optional forcing programmers to check about the state before accessing them. This check ensures that we never run into <code class="inline-code">NullPointerException</code>.&nbsp;',
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "LTH9QrM7x8",
      type: "heading",
      data: {
        text: "Advantage of Optional",
        level: 2,
        alignment: "left",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "w9fRcv7WsW",
      type: "nestedList",
      data: {
        style: "unordered",
        items: [
          {
            content: "Avoiding NullPointerException",
            items: [],
          },
          {
            content: "Improved Code Readability ",
            items: [],
          },
          {
            content: "Explicit handling of absence ",
            items: [],
          },
          {
            content: "Reduction of boilerplate code",
            items: [],
          },
          {
            content: "Encourage defensive programming ",
            items: [],
          },
        ],
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "VddC_fFA2K",
      type: "heading",
      data: {
        text: "Disadvantage of Optional",
        level: 2,
        alignment: "left",
      },
      tunes: {
        textVariantTune: "",
      },
    },
    {
      id: "MNjxNssrmy",
      type: "nestedList",
      data: {
        style: "unordered",
        items: [
          {
            content: "Verbosity in some cases",
            items: [],
          },
          {
            content: "Null inside Optional",
            items: [],
          },
          {
            content: "Potential abstraction misuse",
            items: [],
          },
          {
            content: "Limited serialization support",
            items: [],
          },
        ],
      },
      tunes: {
        textVariantTune: "",
      },
    },
  ],
  version: "2.28.2",
};

export default function Page() {
  return (
    <div style={{ width: "100%" }}>
      <div
        style={{
          width: "50%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <EditorJsComponent
          id="editor-test"
          onChange={(d: any) => console.log(d)}
          data={data}
        />
      </div>
    </div>
  );
}

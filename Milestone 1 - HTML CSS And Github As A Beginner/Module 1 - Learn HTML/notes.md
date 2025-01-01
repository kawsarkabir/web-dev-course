## এইচটিএমএল (HTML) কি?

এইচটিএমএল কি সেটা জানার আগে আমরা একটু জেনে নেই যে ওয়েবসাইট কি? ওয়েবসাইট হল ইন্টারনেট জগতে আপনি যা দেখতে পান, যেমন ছবি, ভিডিও, অডিও ইত্যাদির সমষ্টি এবং বিভিন্ন ডাটা। আপনি যদি আপনার ব্যবসা বা এমন কিছু শেয়ার করতে চান যেটা বিশ্বের সবাই দেখতে পাবে, সেটা করার অন্যতম মাধ্যম হল এই ওয়েবসাইট। আর এই ওয়েবসাইটের মূল ভিত্তিই হলো এইচটিএমএল।

এইচটিএমএল হল একটি স্ট্যান্ডার্ড মার্কআপ ল্যাঙ্গুয়েজ। এটি কোন প্রোগ্রামিং ল্যাঙ্গুয়েজ নয়। HTML এর অর্থ হল **হাইপার টেক্সট মার্কআপ ল্যাঙ্গুয়েজ (Hyper Text Markup Language)**। এটি দিয়ে একটি ওয়েব পেজের **Structure** তৈরি করা হয়। এইচটিএমএল কতগুলো **ট্যাগ** এর সমন্বয়ে গঠিত, যা কোন ওয়েব পেইজের **Structure** গঠন করে।

অর্থাৎ এই মার্কআপ (**Markup**) ট্যাগ এর কাজ হল কোন ওয়েব পেইজ এর বিভিন্ন **ইলিমেন্ট** কিভাবে দেখাবে তা নির্দেশ করা। **Tim Berners-Lee** এইচটিএমএল এর প্রথম ভার্সন তৈরি করেন ১৯৯৩ সালে এবং সর্বশেষ ২০১০ সালে HTML 5 আপডেট করা হয়।

---

### ট্যাগ কি?

ট্যাগ হল এইচটিএমএল এর একটি গুরুত্বপূর্ণ অংশ যা ব্রাউজারকে জানায় কীভাবে একটি ইলিমেন্ট প্রদর্শন করতে হবে। ট্যাগ সাধারণত কোণার বন্ধনী `< >` দিয়ে ঘেরা থাকে।  
**উদাহরণ:**

- `<h1>`: হেডিং ট্যাগ
- `<p>`: প্যারাগ্রাফ ট্যাগ
- `<img>`: ইমেজ ট্যাগ

**দুই প্রকারের ট্যাগ রয়েছে:**

1. **ওপেনিং ট্যাগ:** যেমন `<h1>`
2. **ক্লোজিং ট্যাগ:** যেমন `</h1>`

কিছু ট্যাগ, যেমন `<img>`, **self-closing** হয় এবং এর ক্লোজিং ট্যাগ থাকে না।

---

### এইচটিএমএল এলিমেন্ট কাকে বলে?

এইচটিএমএল এলিমেন্ট হল একটি ওয়েব পেজে কনটেন্ট বা স্ট্রাকচার তৈরির প্রধান অংশ। একটি এইচটিএমএল এলিমেন্ট সাধারণত শুরু এবং শেষ ট্যাগের মধ্যে থাকা কনটেন্ট নিয়ে তৈরি।  
**উদাহরণ:**

```html
<p>এটি একটি প্যারাগ্রাফ এলিমেন্ট।</p>
```

এখানে `<p>` হল শুরু ট্যাগ, `</p>` হল ক্লোজিং ট্যাগ, এবং এর মধ্যে থাকা **"এটি একটি প্যারাগ্রাফ এলিমেন্ট"** হল কনটেন্ট।

---

### অ্যাট্রিবিউট কি?

অ্যাট্রিবিউট হল ট্যাগের অতিরিক্ত তথ্য যা একটি ইলিমেন্টের বৈশিষ্ট্য বা আচরণ নির্ধারণ করে। এটি সাধারণত ওপেনিং ট্যাগের ভেতরে লেখা হয়।  
**উদাহরণ:**

```html
<img src="image.jpg" alt="ছবির বিবরণ" width="300" />
```

এখানে:

- `src` (source): ছবির লোকেশন দেখায়।
- `alt` (alternative text): ছবির বিকল্প টেক্সট।
- `width`: ছবির প্রস্থ নির্ধারণ করে।

অ্যাট্রিবিউট সবসময় **নাম="মান"** (name="value") ফরম্যাটে লেখা হয়।

---

### HTML এর বেসিক ট্যাগ

#### ১. ডকুমেন্ট ডিক্লারেশন (DOCTYPE):

এটি বলে দেয় যে ডকুমেন্টটি HTML5 ভার্সনের।

```html
<!DOCTYPE html>
```

#### ২. `<html>` ট্যাগ:

এই ট্যাগের ভেতরে পুরো HTML ডকুমেন্ট থাকে।

```html
<html>
  <!-- All content goes here -->
</html>
```

#### ৩. `<head>` ট্যাগ:

এই ট্যাগে মেটা ইনফরমেশন থাকে যেমন পেজের টাইটেল, স্টাইলশিট লিংক, স্ক্রিপ্ট ইত্যাদি।

```html
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>My Web Page</title>
  <link rel="stylesheet" href="style.css" />
</head>
```

#### ৪. `<body>` ট্যাগ:

এই ট্যাগের ভেতরে মূল কন্টেন্ট থাকে যা ব্রাউজারে প্রদর্শিত হয়।

```html
<body>
  <h1>Welcome!</h1>
  <p>This is the content of the page.</p>
</body>
```

#### ৫. হেডিং ট্যাগ:

`<h1>` থেকে `<h6>` পর্যন্ত হেডিং ব্যবহার হয়। `<h1>` সবচেয়ে বড় এবং `<h6>` সবচেয়ে ছোট।

```html
<h1>Main Heading</h1>
<h2>Sub Heading</h2>
```

#### ৭. টেক্সট ফরম্যাটিং ট্যাগ:

```html
<p>This is a paragraph tag.</p> // কোন পেরা লিখতে ব্যাবহার হয়
<b>this is bold tag</b> // কোন লেখা কে মোটা করতে ব্যাবহার হয়
<strong>this is strong tag</strong> // এটাও মোটা করতে ব্যাবহার হয় কিন্তু এটা মিনিংফুল ট্যাগ 
<i>this is italic tag</i> // কোন লেখা কে ইতালিক করতে ব্যাবহার হয়
<em>this is em tag</em> // এটাও ইতালিক করতে ব্যাবহার হয় কিন্তু এটা মিনিংফুল ট্যাগ 
```

#### ৭. লিংক ট্যাগ:

```html
<a href="https://www.example.com">Visit Example</a>
```

#### ৮. ইমেজ ট্যাগ:

```html
<img src="image.jpg" alt="Sample Image" />
```

#### ৯. লিস্ট ট্যাগ:

```html
<ul>
  <li>Item 1</li>
  <li>Item 2</li>
</ul>
<ol>
  <li>Item 1</li>
  <li>Item 2</li>
</ol>
```

---

### HTML ফর্ম এবং ইনপুট ফিল্ড

ফর্ম ইউজারের কাছ থেকে ডাটা নেয়ার জন্য ব্যবহৃত হয়। ফর্মের বিভিন্ন ইনপুট ট্যাগ যেমন `input`, `textarea`, এবং `button` CSS দিয়ে স্টাইল করা যায়।

```html
<form>
  <label for="name">Name:</label>
  <input type="text" id="name" name="name" />
  <label for="email">Email:</label>
  <input type="email" id="email" name="email" />
  <button type="submit">Submit</button>
</form>
```

---

### HTML টেবিল (Tables)

HTML টেবিল ব্যবহার করে ডাটা টেবিল ফরম্যাটে দেখানো যায়।

```html
<table>
  <tr>
    <th>Name</th>
    <th>Age</th>
  </tr>
  <tr>
    <td>John</td>
    <td>25</td>
  </tr>
</table>
```

---

### HTML সেমান্টিক ট্যাগ (Semantic Tags)

সেমান্টিক ট্যাগগুলো পেজের বিভিন্ন অংশকে নির্দিষ্টভাবে চিহ্নিত করে যেমন `<header>`, `<footer>`, `<article>`, `<section>`, ইত্যাদি।

```html
<header>
  <h1>My Website</h1>
</header>
<section>
  <article>
    <h2>Blog Post Title</h2>
    <p>This is the content of the blog post.</p>
  </article>
</section>
<footer>
  <p>Footer content here.</p>
</footer>
```

---

### HTML মাল্টিমিডিয়া (Images, Audio, Video)

ছবি:

```html
<img src="image.jpg" alt="Sample Image" />
```

অডিও:

```html
<audio controls>
  <source src="audio.mp3" type="audio/mpeg" />
  Your browser does not support the audio element.
</audio>
```

ভিডিও:

```html
<video controls>
  <source src="video.mp4" type="video/mp4" />
  Your browser does not support the video tag.
</video>
```

---

### মেটা ট্যাগ এবং SEO (Meta Tags and SEO)

SEO এর জন্য মেটা ট্যাগ গুরুত্বপূর্ণ।

```html
<meta name="description" content="This is a sample web page." />
<meta name="keywords" content="HTML, CSS, JavaScript" />
<meta name="author" content="author name" />
```

---

এই ছিল HTML-এর বেসিক থেকে অ্যাডভান্স সবকিছু নিয়ে একটি সংক্ষিপ্ত ধারণা। HTML ওয়েব ডেভেলপমেন্টের ভিত্তি, আর CSS এবং JavaScript এর মাধ্যমে আপনি আপনার ওয়েবসাইটকে আরও ইন্টারঅ্যাকটিভ এবং আকর্ষণীয় করে তুলতে পারবেন।

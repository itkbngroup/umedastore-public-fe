import Link from 'next/link';

export default function Product() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      Product Page
     

     <br/>

<Link href="/about">
    about page
  </Link>

<br/>
<Link href="/">
    home page
  </Link>

<br/>
<Link href="/product/1/filter">
    Product Filter page
  </Link>

<br/>

<Link href="/product">
    Product  page
  </Link>
    </div>
  );
}

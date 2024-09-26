import React from "react";
import Image from "next/image";
import Link from "next/link";

const HeaderLogo = () => {
  return (
    <Link href={"/"}>
      <div className="items-center hidden lg:flex">
        <Image src={""} alt={""} width={100} height={100} />
      </div>
    </Link>
  );
};

export default HeaderLogo;

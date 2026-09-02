"use client";

import Link from "next/link";
import { Badge } from "../Badge";
import { Typography } from "../Typography";
import { useTranslation } from "react-i18next";
import { Button } from "../Button";
import { usePathname, useRouter } from "next/navigation";
import configs from "@configs/index";

type HeaderVariantT = "landing" | "app";

type HeaderNavKeysT =
  | "navigation.howItWorks"
  | "navigation.pricing"
  | "navigation.dex"
  | "navigation.catalogue"
  | "navigation.collection"
  | "navigation.shop";

const NAV_LINKS: Record<
  HeaderVariantT,
  { href: string; labelKey: HeaderNavKeysT }[]
> = {
  landing: [
    { href: "#how-it-works", labelKey: "navigation.howItWorks" },
    { href: "#pricing", labelKey: "navigation.pricing" },
    { href: "#dex", labelKey: "navigation.dex" },
  ],
  app: [
    { href: "/dashboard", labelKey: "navigation.catalogue" },
    { href: "/dashboard/collection", labelKey: "navigation.collection" },
    { href: "/dashboard/shop", labelKey: "navigation.shop" },
  ],
};

// TODO: Add header variations for protected and not protected routes
export const Header = ({ variant }: { variant: HeaderVariantT }) => {
  const { t } = useTranslation("common", { keyPrefix: "Header" });

  const pathname = usePathname();
  const router = useRouter();
  const links = NAV_LINKS[variant];

  const handleLogin = () => {
    router.push(configs.ROUTES.LOGIN);
  };

  return (
    <header className="bg-background sticky top-[0px] z-[60] flex items-center justify-between gap-[40px] py-[16px] px-[56px] border-b-[3px] border-border-main">
      {/* Logo */}
      <Link
        href="/"
        className="flex items-center gap-[11px] cursor-pointer group"
      >
        <Badge
          text="C"
          shadow={true}
          color="red"
          className="h-[32px] w-[32px] font-black text-base"
        />
        <Typography size="xl" weight="black">
          {t("headerTitle")}
        </Typography>
      </Link>

      {/* Navigation */}
      <nav className="flex items-center gap-[30px]">
        {links.map((link) => {
          const isActive = pathname === link.href;

          return (
            <Link key={link.href} href={link.href} passHref>
              <Typography
                size="sm"
                weight={isActive ? "bold" : "semibold"}
                className={`cursor-pointer transition-colors hover:text-primary ${
                  isActive ? "text-primary" : "text-body-muted"
                }`}
              >
                {t(link.labelKey)}
              </Typography>
            </Link>
          );
        })}
      </nav>

      {/* Login section */}
      <div className="flex items-center gap-[16px]">
        <Button variant="text" animation="press" className="text-body">
          <Typography size="sm" weight="semibold" onClick={handleLogin}>
            {t("signIn")}
          </Typography>
        </Button>
        <Button
          shadow={true}
          animation="press"
          className="py-[11px] px-[22px]"
          onClick={handleLogin}
        >
          <Typography size="sm" weight="extrabold">
            {t("login")}
          </Typography>
        </Button>
      </div>
    </header>
  );
};

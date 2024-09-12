import { getDiscoverMovies } from "@/lib/getMovies";
import React from "react";
import HeroCarousel from "./HeroCarousel";

interface carouselBannerProps {
  id?: string;
  keywords?: string;
}

export default async function CarouselBanner({ id, keywords }: carouselBannerProps) {
  const movies = await getDiscoverMovies(id, keywords);
  return <HeroCarousel movies={movies} />;
}

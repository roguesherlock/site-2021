type ImageProps = {
  src: string;
  alt: string;
};

export default function Image({ src, alt }: ImageProps) {
  return (
    <div className="flex-shrink-0 max-w-none px-4 lg:px-8">
      <img
        className="h-auto sm:min-h-0 w-full object-cover"
        src={src}
        alt={alt}
      />
    </div>
  );
}

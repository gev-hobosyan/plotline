'use client';

import { useState, useTransition } from 'react';
import { setContentTypeAction } from '../actions/contentTypeActions';

type ContentType = 'movies' | 'books';

interface ContentTypeSwitcherProps {
  initialType: ContentType;
}

export default function ContentTypeSwitcher({ initialType }: ContentTypeSwitcherProps) {
  const [contentType, setContentType] = useState<ContentType>(initialType);
  const [isPending, startTransition] = useTransition();

  const handleSwitch = (type: ContentType) => {
    setContentType(type);
    startTransition(async () => {
      await setContentTypeAction(type);
    });
  };

  return (
    <div className="flex gap-2 items-center">
      <button
        onClick={() => handleSwitch('movies')}
        disabled={isPending}
        className={`px-4 py-2 rounded-lg transition-colors ${
          contentType === 'movies'
            ? 'bg-m-primary text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Movies
      </button>
      <button
        onClick={() => handleSwitch('books')}
        disabled={isPending}
        className={`px-4 py-2 rounded-lg transition-colors ${
          contentType === 'books'
            ? 'bg-m-primary text-white'
            : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
        } ${isPending ? 'opacity-50 cursor-not-allowed' : ''}`}
      >
        Books
      </button>
    </div>
  );
}
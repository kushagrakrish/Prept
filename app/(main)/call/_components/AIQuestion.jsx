"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Loader2 } from "lucide-react";
import { CATEGORY_LABEL } from "@/lib/data";
import useFetch from "@/hooks/use-fetch";
import { generateInterviewQuestions } from "@/actions/aiQuestions";

export default function AIQuestionsPanel({ categories }) {
  const [selectedCategory, setSelectedCategory] = useState(
    categories?.[0] ?? null,
  );

  const {
    data,
    loading,
    error,
    fn: generateFn,
  } = useFetch(generateInterviewQuestions);

  const questions = data?.questions ?? [];

  return (
    <div className='flex flex-col gap-4 h-full overflow-hidden'>
      {/* Category selector */}
      <div className='flex flex-wrap gap-1.5'>
        {categories?.map((cat) => (
          <button
            key={cat}
            type='button'
            onClick={() => setSelectedCategory(cat)}
            className={`cursor-pointer text-xs px-4 py-2 rounded-lg border transition-all duration-200 ${
              selectedCategory === cat
                ? "border-violet-500/40 bg-violet-500/10 text-violet-400"
                : "border-white/10 text-stone-500 hover:border-white/20 hover:text-stone-400"
            }`}
          >
            {CATEGORY_LABEL[cat] ?? cat}
          </button>
        ))}
      </div>

      <Button
        variant='gold'
        size='sm'
        disabled={loading || !selectedCategory}
        onClick={() => generateFn({ category: selectedCategory })}
        className='self-start gap-2'
      >
        {loading ? (
          <>
            <Loader2 size={13} className='animate-spin' />
            Generating…
          </>
        ) : (
          <>
            <Sparkles size={13} />
            Generate questions
          </>
        )}
      </Button>

      {error && (
        <p className='text-xs text-red-400'>{error?.message || error}</p>
      )}

      {/* Questions list */}
      {questions.length > 0 ? (
        <div className='flex flex-col gap-3 overflow-y-auto flex-1 pr-1'>
          {questions.map((q, i) => (
            <Card
              key={i}
              className='border-white/10 bg-stone-900/50 hover:border-violet-500/20 transition-all duration-200'
            >
              <CardContent className='p-4 flex flex-col gap-2'>
                <p className='text-sm text-stone-200 font-medium leading-snug'>
                  {i + 1}. {q.question}
                </p>
                <div className='h-px bg-white/5' />
                <p className='text-xs text-stone-400 font-light leading-relaxed'>
                  <span className='text-violet-400/80 font-medium'>Answer: </span>
                  {q.answer}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <div className='flex-1 flex flex-col items-center justify-center gap-2 text-center'>
          <span className='w-10 h-10 rounded-xl bg-violet-500/10 border border-violet-500/20 flex items-center justify-center'>
            <Sparkles size={16} className='text-violet-400' />
          </span>
          <p className='text-xs text-stone-600'>
            Select a category and generate role-specific questions for this
            session.
          </p>
        </div>
      )}
    </div>
  );
}

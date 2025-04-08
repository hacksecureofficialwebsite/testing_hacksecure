import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";

export async function GET() {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    // Get session
    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = session.user;

    // Fetch user progress
    const { data: progress, error: progressError } = await supabase
      .from("intern_progress")
      .select("*")
      .eq("user_id", user.id)
      .single();

    if (!progress) {
      // Create new progress if not found
      const { data: newProgress, error: insertError } = await supabase
        .from("intern_progress")
        .insert([
          {
            user_id: user.id,
            section1_complete: false,
            section2_complete: false,
            section3_complete: false,
            section4_complete: false,
            section5_complete: false,
            section6_complete: false,
            section7_complete: false,
            section8_complete: false,
            section9_complete: false,
            section10_complete: false,
          },
        ])
        .select()
        .single();

      if (insertError) {
        return NextResponse.json({ error: "Failed to create progress" }, { status: 500 });
      }

      return NextResponse.json(newProgress);
    }

    return NextResponse.json(progress);
  } catch (error) {
    console.error("Progress API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const supabase = createRouteHandlerClient({ cookies });

    const {
      data: { session },
      error: sessionError,
    } = await supabase.auth.getSession();

    if (sessionError || !session?.user) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    const user = session.user;
    const body = await request.json();
    const { section, complete } = body;

    // Update only the specific section
    const { data: updatedProgress, error: updateError } = await supabase
      .from("intern_progress")
      .update({ [`section${section}_complete`]: complete })
      .eq("user_id", user.id)
      .select()
      .single();

    if (updateError) {
      return NextResponse.json({ error: "Failed to update progress" }, { status: 500 });
    }

    return NextResponse.json(updatedProgress);
  } catch (error) {
    console.error("Progress update API error:", error);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}

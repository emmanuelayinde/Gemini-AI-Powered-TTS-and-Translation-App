export type ISpeechStatus = "speaking" | "paused" | "stopped" | "done" | null;

export interface IUtteranceProps {
  text: string;
  language?: string;
}

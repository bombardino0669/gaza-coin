
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Twitter, Send } from "lucide-react";

export default function GazaCoinLanding() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f1e3c3] via-[#d6b177] to-[#aa682c] text-[#231709] px-6 py-10 flex flex-col items-center font-sans">
      <div className="bg-[#f5e6cc] p-8 rounded-2xl shadow-xl max-w-4xl w-full border border-[#cd9b4c]">
        <img
          src="/gaza-mascot.png"
          alt="Gaza Mascot"
          className="w-48 h-auto mx-auto mb-6 rounded-xl shadow-md"
        />
        <h1 className="text-5xl md:text-6xl font-bold text-center mb-4 tracking-tight text-[#aa682c] drop-shadow-lg">
          🕊️ Gaza Coin ($GAZA)
        </h1>
        <p className="text-lg md:text-xl text-center text-[#3b2e19] mb-8 max-w-3xl mx-auto">
          A meme coin with a mission. Built on hope, resistance, and solidarity. Every trade is a voice for the voiceless. Join the decentralized movement.
        </p>

        <div className="flex justify-center gap-4 mb-8 flex-wrap">
          <Button className="bg-[#cd9b4c] hover:bg-[#b8823c] text-lg px-6 py-2 rounded-full shadow-md">
            Coming Soon
          </Button>
          <Button variant="outline" className="border-[#aa682c] text-[#231709] text-lg px-6 py-2 rounded-full hover:bg-[#f0d8b0]">
            View Chart (Soon)
          </Button>
        </div>

        <Card className="bg-[#e5caa3] border border-[#cd9b4c] rounded-xl shadow-md w-full max-w-3xl mx-auto">
          <CardContent className="p-6">
            <h2 className="text-2xl font-bold mb-4 text-[#aa682c]">Tokenomics</h2>
            <ul className="space-y-2 text-lg text-[#3b2e19] list-disc list-inside">
              <li>Total Supply: 1,000,000 $GAZA</li>
              <li>90% Bonding Curve (Pump.fun)</li>
              <li>10% Charity Wallet (locked)</li>
              <li>0% Tax</li>
            </ul>
          </CardContent>
        </Card>

        <div className="mt-10 text-center max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-3 text-[#aa682c]">Why Gaza Coin?</h3>
          <p className="text-md text-[#3b2e19] mb-6">
            Every buy sends a message. Every meme spreads awareness. Gaza Coin isn’t just a token—it’s a tribute to the resilience of a people, and a decentralized act of solidarity through crypto.
          </p>
          <p className="text-md text-[#3b2e19]">
            With every transaction, you’re contributing to both the growth of the token and direct support efforts. $GAZA represents unity, strength, and the global community standing for justice. The more we grow, the louder our message becomes.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-3 text-[#aa682c] text-center">Our Mission</h3>
          <p className="text-md text-[#3b2e19] text-center">
            Gaza Coin was created to empower supporters of justice and peace with a real, decentralized tool for fundraising, visibility, and change. We’re not just memeing — we’re moving.
          </p>
        </div>

        <div className="mt-10 max-w-3xl mx-auto">
          <h3 className="text-2xl font-semibold mb-3 text-[#aa682c] text-center">How to Buy</h3>
          <p className="text-md text-[#3b2e19] text-center mb-4">
            $GAZA is not live yet. Once launched, you’ll be able to find it on platforms like Dexscreener and Raydium. Stay tuned!
          </p>
        </div>

        <div className="flex justify-center gap-6 mt-10 flex-wrap">
          <a href="https://twitter.com/GazaCoin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#3b2e19] hover:text-[#aa682c]">
            <Twitter size={20} /> Twitter
          </a>
          <a href="https://t.me/GazaCoin" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-[#3b2e19] hover:text-[#aa682c]">
            <Send size={20} /> Telegram
          </a>
        </div>

        <div className="mt-10 text-center text-sm text-[#3b2e19]/70">
          © 2025 Gaza Coin. Powered by people, for the people.
        </div>
      </div>
    </div>
  );
}

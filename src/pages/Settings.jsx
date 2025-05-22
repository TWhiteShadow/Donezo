import { useTheme } from 'next-themes';
import { Button } from '../components/ui/button';
import { useEffect, useState } from 'react';

function Settings() {
    const { theme, setTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) return null;

    return (
        <div className="container mx-auto p-6 space-y-8">
            <h1 className="text-3xl font-bold">Settings</h1>

            <div className="space-y-8">
                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Theme Mode</h2>
                    <div className="flex flex-col gap-4">
                        <div className="flex gap-2">
                            <Button
                                variant={theme === "light" ? 'default' : 'outline'}
                                onClick={() => setTheme("light")}
                            >
                                Light
                            </Button>
                            <Button
                                variant={theme === "dark" ? 'default' : 'outline'}
                                onClick={() => setTheme("dark")}
                            >
                                Dark
                            </Button>
                            <Button
                                variant={theme === "system" ? 'default' : 'outline'}
                                onClick={() => setTheme("system")}
                            >
                                System
                            </Button>
                        </div>
                    </div>
                </div>

                <div className="space-y-4">
                    <h2 className="text-xl font-semibold">Theme Color</h2>
                    <div className="flex gap-2">
                        <Button
                            variant={theme === "pink" ? 'default' : 'outline'}
                            onClick={() => setTheme("pink")}
                        >
                            Pink
                        </Button>
                        <Button
                            variant={theme === "green" ? 'default' : 'outline'}
                            onClick={() => setTheme("green")}
                        >
                            Green
                        </Button>
                        <Button
                            variant={theme === "purple" ? 'default' : 'outline'}
                            onClick={() => setTheme("purple")}
                        >
                            Purple
                        </Button>
                    </div>
                </div>

                <p className="text-sm text-muted-foreground">
                    Current theme: {theme}
                </p>
            </div>
        </div>
    );
}

export default Settings;
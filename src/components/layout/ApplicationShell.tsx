import { Navbar } from "@/components/layout/Navbar";
import { AppSidebar } from "@/components/layout/AppSidebar";
import { MainContent } from "@/components/layout/MainContent";
import { SidebarProvider } from "@/components/ui/sidebar";
import { Toaster } from "@/components/ui/toaster";

export const ApplicationShell = () => {
  return (
    <SidebarProvider defaultOpen={true}>
      <div className="fixed inset-0 flex flex-col">
        <Navbar />
        <div className="flex flex-1 overflow-hidden">
          <AppSidebar />
          <MainContent />
        </div>
        <footer className="flex-none h-10 border-t bg-background flex items-center justify-center">
            <p className="text-black dark:text-white">Developed by <a href="https://www.instagram.com/idk_satvik.s/" target="_blank" rel="noopener noreferrer" className="text-black dark:text-white hover:underline">Sparrow AI Solutions</a></p>
        </footer>
      </div>
      <Toaster />
    </SidebarProvider>
  );
};

import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchLinks } from "../features/links/linksSlice";
import AddLinkForm from "../components/AddLinkForm";
import LinkList from "../components/LinkList";
import type { AppDispatch, RootState } from "../app/store";

// This component renders the user's dashboard with their saved links
export default function Dashboard() {
  // Access Redux dispatch and select state data from the links slice
  const dispatch = useDispatch<AppDispatch>();
  const { isLoading, error } = useSelector((s: RootState) => s.links);

  // Fetch links when the component first mounts
  useEffect(() => {
    dispatch(fetchLinks());
  }, [dispatch]);

  // Render dashboard layout, loading/error states, and link list
  return (
    <div className="max-w-xl mx-auto space-y-4 ">
      <div className="flex justify-end">
        <select
          id="theme"
          name="theme"
          className="border border-gray-300 rounded-lg p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-amber-400">
          <option value="">Select a theme</option>
          <option value="light">Light</option>
          <option value="dark">Dark</option>
          <option value="system">System Default</option>
        </select>
      </div>
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <AddLinkForm />
      {isLoading && <div>Loading…</div>}
      {error && <div className="text-red-600">{error}</div>}
      <LinkList />
    </div>
  );
}

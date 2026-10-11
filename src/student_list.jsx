import { useState } from "react";
import Favorite_student from "./Favorite_student";

function Student_list() {
    const [student_list] = useState([
        "Giri",
        "Nagulan",
        "Karthick",
        "Kumaran",
        "Dhanush",
        "Gokul"
    ]);

    const [Favorite_student1, setFavorite_list1] = useState([]);
    const [page, setPage] = useState("students");

    function Add_student(student) {
        setFavorite_list1(function (oldList) {
            return [...oldList, student];
        });
    }

    return (
        <div className="min-h-screen bg-slate-100 p-6">
            <div className="mx-auto max-w-4xl">

                {/* Navbar */}
                <div className="mb-8 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-white p-5 shadow-sm">
                    <h1 className="text-2xl font-bold text-slate-800">
                        🎓 StudentHub
                    </h1>

                    <div className="flex gap-3">
                        <button
                            onClick={() => setPage("students")}
                            className={`rounded-xl px-4 py-2 font-semibold ${
                                page === "students"
                                    ? "bg-blue-600 text-white"
                                    : "bg-slate-100 text-slate-700"
                            }`}
                        >
                            Students
                        </button>

                        <button
                            onClick={() => setPage("favorites")}
                            className={`rounded-xl px-4 py-2 font-semibold ${
                                page === "favorites"
                                    ? "bg-pink-600 text-white"
                                    : "bg-pink-50 text-pink-600"
                            }`}
                        >
                            ❤️ Favorites ({Favorite_student1.length})
                        </button>
                    </div>
                </div>

                {/* Student List Page */}
                {page === "students" && (
                    <div>
                        <h2 className="mb-2 text-3xl font-bold text-slate-800">
                            Student List
                        </h2>

                        <p className="mb-6 text-slate-500">
                            Select your favorite students.
                        </p>

                        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                            {student_list.map(function (student) {
                                const isFavorite =
                                    Favorite_student1.includes(student);

                                return (
                                    <div
                                        key={student}
                                        className="flex items-center justify-between rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                                    >
                                        <div className="flex items-center gap-3">
                                            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-lg font-bold text-blue-700">
                                                {student.charAt(0)}
                                            </div>

                                            <div>
                                                <h3 className="font-bold text-slate-800">
                                                    {student}
                                                </h3>
                                                <p className="text-sm text-slate-500">
                                                    Student
                                                </p>
                                            </div>
                                        </div>

                                        <button
                                            disabled={isFavorite}
                                            onClick={() => Add_student(student)}
                                            className={`rounded-xl px-3 py-2 text-sm font-semibold text-white ${
                                                isFavorite
                                                    ? "cursor-not-allowed bg-gray-400"
                                                    : "bg-blue-600 hover:bg-blue-700"
                                            }`}
                                        >
                                            {isFavorite ? "✓ Added" : "♡ Add"}
                                        </button>
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                )}

                {/* Favorite Students Page */}
                {page === "favorites" && (
                    <Favorite_student
                        Favorite_student1={Favorite_student1}
                        setFavorite_list1={setFavorite_list1}
                        goToStudents={() => setPage("students")}
                    />
                )}
            </div>
        </div>
    );
}

export default Student_list;